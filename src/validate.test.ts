import {validate} from "./validate"
import quoteSchema from "./fixtures/schema.json"

describe('validate', () => {

    const suggestionCases = [
        ['', ['availability','price','product','state','supplier'], 0],
        ['s', ['state','supplier'], 0],
        ['supplier', [], 0],
        ['supplier.', ['country', 'tags'], 9],
        ['supplier.co', ['country'], 9],
        ['supplier.cot', [], 9],
        ['supplie.co', [], undefined],
        ['state =', ['"available"', '"withdrawn"'], 7],
        ['product.categories =', ['"Appliances"', '"Apps & Games"', '"Beauty"', '"Books"', '"Electronics"', '"Handmade"'], 20],
        ['state = "available" and', ['availability','price','product','state','supplier'], 23],
    ]

    // @ts-ignore
    test.each(suggestionCases)('suggestions for %s', (input: string, expectedSuggestions: Array<string>, expectedStartIdx: number | undefined) => {
        const result = validate(input, quoteSchema)
        expect(result.suggestions).toEqual(expectedSuggestions)
        expect(result.startIndex).toEqual(expectedStartIdx)
    })

    const syntaxErrorCases = [
        ['inv/'],
        ['state ='],
        ['state = \"'],
        ['state = \"val\" other="x" another="y"'],
        ['state = \"val\" .toString() we|'],
        ['state = \"val\" and (other="x" or another="y"'],
    ]

    test.each(syntaxErrorCases)('syntax error in %s', (input: string) => {
        const result = validate(input, quoteSchema)
        expect(result.valid).toBeFalsy()
        expect(result.error).toBeDefined()
    })
})


