import { CharStreams, CommonTokenStream, Token } from 'antlr4ts-browser';
// @ts-ignore
import _ from 'lodash'; 
import { ErrorListener } from './errors';
import {FilterQueryLexer} from './parser/FilterQueryLexer';
import {FilterQueryParser} from './parser/FilterQueryParser';

export type CustomSuggestionFn = (propName: string) => Array<string>

interface SuggestionsResult {
    suggestions: Array<string>
    startIndex?: number
}

const wrapStrings = (vals: Array<string>) => vals.map(v => `"${v}"`)

class SuggestionResolver {
    constructor(
        private readonly parser: FilterQueryParser, 
        private readonly schema: any, 
        private readonly customSuggestionsFn?: CustomSuggestionFn) {}

    public getSuggestions(): SuggestionsResult {
        try {
            const {suggestions, startIndex} = this.getSuggestionsInternal()
            suggestions.sort()
            return {suggestions, startIndex}
        } catch {
            return this.emptySuggestions()
        }
    }

    private getSuggestionsInternal(): SuggestionsResult {
        const tokenCount = this.parser.inputStream.size
        if (tokenCount <= 1) {
            // suggest top-level attributes        
            return {
                suggestions: Object.keys(this.schema.properties || {}),
                startIndex: 0
            }
        }
    
        const currToken = this.parser.inputStream.get(tokenCount - 2)
        if (currToken.type === FilterQueryParser.AND || currToken.type === FilterQueryParser.OR) {
            return {
                suggestions: Object.keys(this.schema.properties || {}),
                startIndex: currToken.stopIndex + 1
            }
        }
    
        if (currToken.type === FilterQueryParser.ATTRIBUTE_NAME) {
            return this.getAttributeSuggestions(currToken)
        }
    
        if (currToken.type === FilterQueryParser.EQ || currToken.type === FilterQueryParser.NE) {
            return this.getValueSuggestions(currToken.stopIndex + 1)
        }
    
        return this.emptySuggestions()
    }

    private getValueSuggestions(startIndex: number): SuggestionsResult {
        const prevToken = this.parser.inputStream.get(this.parser.inputStream.size - 3)
        const attrPath = prevToken.text?.split('.') || []
        let currSchema = this.schema
        for (let i = 0; i < attrPath.length && currSchema; i++) {
            if (!currSchema.properties[attrPath[i]]) {
                return this.emptySuggestions() // TODO: error message with hint
            }
            currSchema = currSchema.properties[attrPath[i]]
        }
        if (!currSchema) {
            return this.emptySuggestions()
        }
        if (this.customSuggestionsFn) {
            const customSuggestions = this.customSuggestionsFn(prevToken.text!)
            if (customSuggestions) {
                return {
                    suggestions: customSuggestions,
                    startIndex, 
                }
            }
        }
        let suggestions: Array<string> = []
        if (currSchema.enum) {
            suggestions = wrapStrings(currSchema.enum)
        } else if (currSchema.type === 'array' && currSchema.items && currSchema.items.enum) {
            suggestions = wrapStrings(currSchema.items.enum)
        }
        return {
            suggestions,
            startIndex,
        }
    }

    private getAttributeSuggestions(attrToken: Token): SuggestionsResult {
        const attrPath = attrToken.text?.split('.') || []
        const lastPathPart = attrPath.length > 0 ? attrPath[attrPath.length - 1] : undefined
        let currSchema = this.schema
        for (let i = 0; i < attrPath.length - 1; i++) {
            if (!currSchema.properties[attrPath[i]]) {
                return this.emptySuggestions() // TODO: error message with hint
            }
            currSchema = currSchema.properties[attrPath[i]]
        }
        if (!currSchema || !currSchema.properties) {
            return this.emptySuggestions()
        }

        const startIdx = attrToken.startIndex + (attrToken.text!.lastIndexOf('.') + 1)
        if (!lastPathPart) {
            return {
                suggestions: Object.keys(currSchema.properties),
                startIndex: startIdx,
            }
        }
        return {
            suggestions: Object.keys(currSchema.properties).filter(p => 
                p.toLowerCase().startsWith(lastPathPart.toLowerCase()) && lastPathPart.length < p.length
            ),
            startIndex: startIdx,
        }
    }

    private emptySuggestions = (): SuggestionsResult => ({ suggestions: [] })
}

export interface ValidateOptions {
    customSuggestionsFn?: CustomSuggestionFn
}

export interface ValidationResult {
    error?: any,
    valid: boolean,
    suggestions: Array<string>
    startIndex?: number
}

export const validate = (input: string, schema: any, validateOptions: ValidateOptions  = {}): ValidationResult => {
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

    parser.query();

    const error = errListener.getLatestError()

    const suggestionResolver = new SuggestionResolver(parser, schema, validateOptions.customSuggestionsFn)
    const suggestionResult = suggestionResolver.getSuggestions()
    return {
        valid: !error,
        error,
        ...suggestionResult
    }
}
