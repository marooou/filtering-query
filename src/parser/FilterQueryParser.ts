// Generated from FilterQuery.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts-browser/atn/ATN";
import { ATNDeserializer } from "antlr4ts-browser/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts-browser/FailedPredicateException";
import { NotNull } from "antlr4ts-browser/Decorators";
import { NoViableAltException } from "antlr4ts-browser/NoViableAltException";
import { Override } from "antlr4ts-browser/Decorators";
import { Parser } from "antlr4ts-browser/Parser";
import { ParserRuleContext } from "antlr4ts-browser/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts-browser/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts-browser/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts-browser/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts-browser/RecognitionException";
import { RuleContext } from "antlr4ts-browser/RuleContext";
//import { RuleVersion } from "antlr4ts-browser/RuleVersion";
import { TerminalNode } from "antlr4ts-browser/tree/TerminalNode";
import { Token } from "antlr4ts-browser/Token";
import { TokenStream } from "antlr4ts-browser/TokenStream";
import { Vocabulary } from "antlr4ts-browser/Vocabulary";
import { VocabularyImpl } from "antlr4ts-browser/VocabularyImpl";

import * as Utils from "antlr4ts-browser/misc/Utils";

import { FilterQueryListener } from "./FilterQueryListener";
import { FilterQueryVisitor } from "./FilterQueryVisitor";


export class FilterQueryParser extends Parser {
	public static readonly LPAR = 1;
	public static readonly RPAR = 2;
	public static readonly COMMA = 3;
	public static readonly OR = 4;
	public static readonly AND = 5;
	public static readonly NOT = 6;
	public static readonly EQ = 7;
	public static readonly NE = 8;
	public static readonly GT = 9;
	public static readonly GE = 10;
	public static readonly LT = 11;
	public static readonly LE = 12;
	public static readonly APPROX = 13;
	public static readonly ATTRIBUTE_NAME = 14;
	public static readonly NUMBER = 15;
	public static readonly STRING = 16;
	public static readonly TRUE = 17;
	public static readonly FALSE = 18;
	public static readonly SPACE = 19;
	public static readonly RULE_query = 0;
	public static readonly RULE_orExpression = 1;
	public static readonly RULE_andExpression = 2;
	public static readonly RULE_baseExpression = 3;
	public static readonly RULE_parenthesisExpression = 4;
	public static readonly RULE_notExpression = 5;
	public static readonly RULE_comparisonExpression = 6;
	public static readonly RULE_booleanExpression = 7;
	public static readonly RULE_operator = 8;
	public static readonly RULE_value = 9;
	public static readonly RULE_bool = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"query", "orExpression", "andExpression", "baseExpression", "parenthesisExpression", 
		"notExpression", "comparisonExpression", "booleanExpression", "operator", 
		"value", "bool",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "','", "'or'", "'and'", "'not'", "'='", "'!='", 
		"'>'", "'>='", "'<'", "'<='", "'~='", undefined, undefined, undefined, 
		"'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAR", "RPAR", "COMMA", "OR", "AND", "NOT", "EQ", "NE", "GT", 
		"GE", "LT", "LE", "APPROX", "ATTRIBUTE_NAME", "NUMBER", "STRING", "TRUE", 
		"FALSE", "SPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FilterQueryParser._LITERAL_NAMES, FilterQueryParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FilterQueryParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FilterQuery.g4"; }

	// @Override
	public get ruleNames(): string[] { return FilterQueryParser.ruleNames; }

	// @Override
	// @ts-ignore
	public get serializedATN(): string { return FilterQueryParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FilterQueryParser._ATN, this);
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FilterQueryParser.RULE_query);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.orExpression();
			this.state = 23;
			this.match(FilterQueryParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orExpression(): OrExpressionContext {
		let _localctx: OrExpressionContext = new OrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FilterQueryParser.RULE_orExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.andExpression();
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FilterQueryParser.OR) {
				{
				{
				this.state = 26;
				this.match(FilterQueryParser.OR);
				this.state = 27;
				this.andExpression();
				}
				}
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FilterQueryParser.RULE_andExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.baseExpression();
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FilterQueryParser.AND) {
				{
				{
				this.state = 34;
				this.match(FilterQueryParser.AND);
				this.state = 35;
				this.baseExpression();
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseExpression(): BaseExpressionContext {
		let _localctx: BaseExpressionContext = new BaseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FilterQueryParser.RULE_baseExpression);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 41;
				this.parenthesisExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 42;
				this.notExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 43;
				this.comparisonExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 44;
				this.booleanExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthesisExpression(): ParenthesisExpressionContext {
		let _localctx: ParenthesisExpressionContext = new ParenthesisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FilterQueryParser.RULE_parenthesisExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(FilterQueryParser.LPAR);
			this.state = 48;
			this.orExpression();
			this.state = 49;
			this.match(FilterQueryParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notExpression(): NotExpressionContext {
		let _localctx: NotExpressionContext = new NotExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FilterQueryParser.RULE_notExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(FilterQueryParser.NOT);
			this.state = 52;
			this.baseExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonExpression(): ComparisonExpressionContext {
		let _localctx: ComparisonExpressionContext = new ComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FilterQueryParser.RULE_comparisonExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(FilterQueryParser.ATTRIBUTE_NAME);
			this.state = 55;
			this.operator();
			this.state = 56;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanExpression(): BooleanExpressionContext {
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FilterQueryParser.RULE_booleanExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(FilterQueryParser.ATTRIBUTE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FilterQueryParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FilterQueryParser.EQ) | (1 << FilterQueryParser.NE) | (1 << FilterQueryParser.GT) | (1 << FilterQueryParser.GE) | (1 << FilterQueryParser.LT) | (1 << FilterQueryParser.LE) | (1 << FilterQueryParser.APPROX))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FilterQueryParser.RULE_value);
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FilterQueryParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 62;
				this.match(FilterQueryParser.NUMBER);
				}
				break;
			case FilterQueryParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.match(FilterQueryParser.STRING);
				}
				break;
			case FilterQueryParser.TRUE:
			case FilterQueryParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 64;
				this.bool();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FilterQueryParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			_la = this._input.LA(1);
			if (!(_la === FilterQueryParser.TRUE || _la === FilterQueryParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x15H\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\x1F\n\x03\f\x03\x0E\x03\"\v\x03" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\'\n\x04\f\x04\x0E\x04*\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x050\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x05\vD\n\v\x03\f\x03\f\x03\f\x02\x02\x02\r\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x02\x04\x03\x02\t\x0F\x03\x02\x13\x14\x02C\x02\x18\x03\x02\x02\x02" +
		"\x04\x1B\x03\x02\x02\x02\x06#\x03\x02\x02\x02\b/\x03\x02\x02\x02\n1\x03" +
		"\x02\x02\x02\f5\x03\x02\x02\x02\x0E8\x03\x02\x02\x02\x10<\x03\x02\x02" +
		"\x02\x12>\x03\x02\x02\x02\x14C\x03\x02\x02\x02\x16E\x03\x02\x02\x02\x18" +
		"\x19\x05\x04\x03\x02\x19\x1A\x07\x02\x02\x03\x1A\x03\x03\x02\x02\x02\x1B" +
		" \x05\x06\x04\x02\x1C\x1D\x07\x06\x02\x02\x1D\x1F\x05\x06\x04\x02\x1E" +
		"\x1C\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03" +
		"\x02\x02\x02!\x05\x03\x02\x02\x02\" \x03\x02\x02\x02#(\x05\b\x05\x02$" +
		"%\x07\x07\x02\x02%\'\x05\b\x05\x02&$\x03\x02\x02\x02\'*\x03\x02\x02\x02" +
		"(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x07\x03\x02\x02\x02*(\x03\x02\x02" +
		"\x02+0\x05\n\x06\x02,0\x05\f\x07\x02-0\x05\x0E\b\x02.0\x05\x10\t\x02/" +
		"+\x03\x02\x02\x02/,\x03\x02\x02\x02/-\x03\x02\x02\x02/.\x03\x02\x02\x02" +
		"0\t\x03\x02\x02\x0212\x07\x03\x02\x0223\x05\x04\x03\x0234\x07\x04\x02" +
		"\x024\v\x03\x02\x02\x0256\x07\b\x02\x0267\x05\b\x05\x027\r\x03\x02\x02" +
		"\x0289\x07\x10\x02\x029:\x05\x12\n\x02:;\x05\x14\v\x02;\x0F\x03\x02\x02" +
		"\x02<=\x07\x10\x02\x02=\x11\x03\x02\x02\x02>?\t\x02\x02\x02?\x13\x03\x02" +
		"\x02\x02@D\x07\x11\x02\x02AD\x07\x12\x02\x02BD\x05\x16\f\x02C@\x03\x02" +
		"\x02\x02CA\x03\x02\x02\x02CB\x03\x02\x02\x02D\x15\x03\x02\x02\x02EF\t" +
		"\x03\x02\x02F\x17\x03\x02\x02\x02\x06 (/C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FilterQueryParser.__ATN) {
			FilterQueryParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FilterQueryParser._serializedATN));
		}

		return FilterQueryParser.__ATN;
	}

}

export class QueryContext extends ParserRuleContext {
	public orExpression(): OrExpressionContext {
		return this.getRuleContext(0, OrExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(FilterQueryParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_query; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext[];
	public andExpression(i: number): AndExpressionContext;
	public andExpression(i?: number): AndExpressionContext | AndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExpressionContext);
		} else {
			return this.getRuleContext(i, AndExpressionContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FilterQueryParser.OR);
		} else {
			return this.getToken(FilterQueryParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_orExpression; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterOrExpression) {
			listener.enterOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitOrExpression) {
			listener.exitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public baseExpression(): BaseExpressionContext[];
	public baseExpression(i: number): BaseExpressionContext;
	public baseExpression(i?: number): BaseExpressionContext | BaseExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BaseExpressionContext);
		} else {
			return this.getRuleContext(i, BaseExpressionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FilterQueryParser.AND);
		} else {
			return this.getToken(FilterQueryParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_andExpression; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseExpressionContext extends ParserRuleContext {
	public parenthesisExpression(): ParenthesisExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesisExpressionContext);
	}
	public notExpression(): NotExpressionContext | undefined {
		return this.tryGetRuleContext(0, NotExpressionContext);
	}
	public comparisonExpression(): ComparisonExpressionContext | undefined {
		return this.tryGetRuleContext(0, ComparisonExpressionContext);
	}
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_baseExpression; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterBaseExpression) {
			listener.enterBaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitBaseExpression) {
			listener.exitBaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitBaseExpression) {
			return visitor.visitBaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenthesisExpressionContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(FilterQueryParser.LPAR, 0); }
	public orExpression(): OrExpressionContext {
		return this.getRuleContext(0, OrExpressionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(FilterQueryParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_parenthesisExpression; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterParenthesisExpression) {
			listener.enterParenthesisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitParenthesisExpression) {
			listener.exitParenthesisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitParenthesisExpression) {
			return visitor.visitParenthesisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotExpressionContext extends ParserRuleContext {
	public NOT(): TerminalNode { return this.getToken(FilterQueryParser.NOT, 0); }
	public baseExpression(): BaseExpressionContext {
		return this.getRuleContext(0, BaseExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_notExpression; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonExpressionContext extends ParserRuleContext {
	public ATTRIBUTE_NAME(): TerminalNode { return this.getToken(FilterQueryParser.ATTRIBUTE_NAME, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_comparisonExpression; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterComparisonExpression) {
			listener.enterComparisonExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitComparisonExpression) {
			listener.exitComparisonExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitComparisonExpression) {
			return visitor.visitComparisonExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	public ATTRIBUTE_NAME(): TerminalNode { return this.getToken(FilterQueryParser.ATTRIBUTE_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_booleanExpression; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterBooleanExpression) {
			listener.enterBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitBooleanExpression) {
			listener.exitBooleanExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitBooleanExpression) {
			return visitor.visitBooleanExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.NE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.LE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.GT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.GE, 0); }
	public APPROX(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.APPROX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_operator; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.STRING, 0); }
	public bool(): BoolContext | undefined {
		return this.tryGetRuleContext(0, BoolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_value; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(FilterQueryParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	// @ts-ignore 
	public get ruleIndex(): number { return FilterQueryParser.RULE_bool; }
	// @Override
	public enterRule(listener: FilterQueryListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: FilterQueryListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FilterQueryVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


