// Generated from FilterQuery.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts-browser/tree/ParseTreeVisitor";

import { QueryContext } from "./FilterQueryParser";
import { OrExpressionContext } from "./FilterQueryParser";
import { AndExpressionContext } from "./FilterQueryParser";
import { BaseExpressionContext } from "./FilterQueryParser";
import { ParenthesisExpressionContext } from "./FilterQueryParser";
import { NotExpressionContext } from "./FilterQueryParser";
import { ComparisonExpressionContext } from "./FilterQueryParser";
import { BooleanExpressionContext } from "./FilterQueryParser";
import { OperatorContext } from "./FilterQueryParser";
import { ValueContext } from "./FilterQueryParser";
import { BoolContext } from "./FilterQueryParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FilterQueryParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FilterQueryVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FilterQueryParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.orExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.baseExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseExpression?: (ctx: BaseExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.parenthesisExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.notExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.comparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpression?: (ctx: ComparisonExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `FilterQueryParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;
}

