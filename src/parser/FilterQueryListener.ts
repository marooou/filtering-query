// Generated from FilterQuery.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts-browser/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `FilterQueryParser`.
 */
export interface FilterQueryListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FilterQueryParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.orExpression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.orExpression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.andExpression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.andExpression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.baseExpression`.
	 * @param ctx the parse tree
	 */
	enterBaseExpression?: (ctx: BaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.baseExpression`.
	 * @param ctx the parse tree
	 */
	exitBaseExpression?: (ctx: BaseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.parenthesisExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.parenthesisExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.notExpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.notExpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	enterComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	exitComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `FilterQueryParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `FilterQueryParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;
}

