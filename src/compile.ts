import { CharStreams, CommonTokenStream } from 'antlr4ts-browser';
// @ts-ignore
import _ from 'lodash'; 
import {FilterQueryVisitor} from './parser/FilterQueryVisitor'
import {FilterQueryLexer} from './parser/FilterQueryLexer';
import {AndExpressionContext, BaseExpressionContext, BoolContext, BooleanExpressionContext, ComparisonExpressionContext, FilterQueryParser, NotExpressionContext, OperatorContext, OrExpressionContext, ParenthesisExpressionContext, QueryContext, ValueContext} from  './parser/FilterQueryParser';
import { TerminalNode } from 'antlr4ts-browser/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts-browser/tree/ErrorNode';
import { RuleNode } from 'antlr4ts-browser/tree/RuleNode';
import { ParseTree } from 'antlr4ts-browser/tree/ParseTree';
import { ErrorListener } from './errors';

type FilterFn = (obj: any) => boolean

class JsExpressionCreator implements FilterQueryVisitor<string> {

    constructor(private readonly inputParam: string) {}

    visitQuery(ctx: QueryContext): string {
        const [orExpression] = (ctx.children || []) as OrExpressionContext[]
        return orExpression.accept(this);
    }
  
    visitOrExpression(ctx: OrExpressionContext): string {
        if (ctx.children?.length === 1) {
            return ctx.children[0].accept(this) // do not wrap into reduce function for a single child.
        }

        const childFns: Array<string> = []
        for (let i = 0; i < ctx.children!.length; i += 2) {
            const childFn = ctx.children![i].accept(this)
            childFns.push(childFn)
        }

        return childFns.join(' || ')
    }
  
    visitAndExpression(ctx: AndExpressionContext): string {
        if (ctx.children!.length === 1) {
            return ctx.children![0].accept(this) // do not wrap into reduce function for a single child.
        }
        
        const childFns: Array<string> = []
        for (let i = 0; i < ctx.children!.length; i += 2) {
            const childFn = ctx.children![i].accept(this)
            childFns.push(childFn)
        }

        return childFns.join(' && ')
    }
  
    visitBaseExpression(ctx: BaseExpressionContext): string {
        const [expr] = ctx.children || []
        return expr.accept(this);
    }
  
    visitParenthesisExpression(ctx: ParenthesisExpressionContext): string {
        const [lpar, expr, rpar] = ctx.children || []
        const fn = expr.accept(this)
        return `(${fn})`;
    }
  
    visitNotExpression(ctx: NotExpressionContext): string {
        const [not, expr] = ctx.children || []
        const fn = expr.accept(this);
        return `!(${fn})`;
    }

    visitBooleanExpression(ctx: BooleanExpressionContext): string {
        const [attr] = (ctx.children || []) as TerminalNode[]
        const attrName = attr.symbol.text!
        const accessor = this.safeAccessor(attrName)
        return `(Array.isArray(${accessor}) ? ${accessor}.length > 0 : !!${accessor})`
    }
    
    visitComparisonExpression(ctx: ComparisonExpressionContext): string {
        const [attr, opCtx, valCtx] = ctx.children || [];
        const [op] = (opCtx as OperatorContext).children as TerminalNode[]
        const attrPath = (attr as TerminalNode).symbol.text!
        const accessor = this.safeAccessor(attrPath)
        const val: string = (valCtx as ValueContext).accept(this)

        switch (op.symbol.type) {
            case FilterQueryParser.EQ:
                return `(Array.isArray(${accessor}) ? ${accessor}.indexOf(${val}) !== -1 : ${accessor} === ${val})`
            case FilterQueryParser.NE:
                return `(Array.isArray(${accessor}) ? ${accessor}.indexOf(${val}) === -1 : ${accessor} !== ${val})`
            case FilterQueryParser.GT:
                return `${accessor} > ${val}`
            case FilterQueryParser.GE:
                return `${accessor} >= ${val}`
            case FilterQueryParser.LT:
                return `${accessor} < ${val}`
            case FilterQueryParser.LE:
                return `${accessor} <= ${val}`
            case FilterQueryParser.APPROX:
                return `!!${accessor}.toLowerCase().match(${val.toLowerCase()})`
            default:
                return 'false'
        }
    }
    
    visitValue(ctx: ValueContext): string {
        const [val] = ctx.children as TerminalNode[];
        switch (val.symbol.type) {
            case FilterQueryParser.NUMBER:
            case FilterQueryParser.STRING:
                return val.symbol.text!
            default:
                return 'undefined'
        }
    }
    
    visitBool(ctx: BoolContext): string {
        const [val] = ctx.children as TerminalNode[];
        return val.symbol.text!
    }
    
    visit = (tree: ParseTree) => ''
    visitChildren = (node: RuleNode) => ''
    visitTerminal = (node: TerminalNode) => ''
    visitErrorNode = (node: ErrorNode) => ''

    safeAccessor(path: string): string {
        return `safeGetter(${this.inputParam}, '${path}')`
    }
}

export const compile = (input: string): FilterFn => {
    const chars = CharStreams.fromString(input);
    const lexer = new FilterQueryLexer(chars);
    
    const errListener = new ErrorListener()

    lexer.removeErrorListeners()
    lexer.addErrorListener(errListener)

    const tokens = new CommonTokenStream(lexer);
    const parser = new FilterQueryParser(tokens);

    parser.buildParseTree = true;

    parser.removeErrorListeners()
    parser.addErrorListener(errListener)

    const queryCtx = parser.query();
    errListener.requireNoErrors();

    const jsExpression = queryCtx.accept(new JsExpressionCreator('__target'));
    const fn: any = new Function('__target', 'safeGetter', `return ${jsExpression};`);
    return (obj: any) => {
        return fn(obj, _.get)
    }
}
