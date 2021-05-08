import {compile} from './compile'

describe('compile', () => {

    const sampleObj = {
        customer: {
            name: "Some customer",
            roles: ["viewer", "editor"]
        },
        price: {
            low: 300,
            high: 1000,
        },
        customer_type: "PREMIUM",
        enabled: true,
        permissions: []
    }

    const testData = [
        ['non-nested string property equality returns true', 'customer_type = "PREMIUM"', true],
        ['non-nested string property equality returns false', 'customer_type = "STANDARD"', false],
        ['string property equality returns true', 'customer.name = "Some customer"', true],
        ['string property equality returns false', 'customer.name = "Some customer1"', false],
        ['string property inequality returns true', 'customer.name != "Some customer1"', true],
        ['string property inequality returns false', 'customer.name != "Some customer"', false],
        ['string property proximity returns true', 'customer.name ~= "some"', true],
        ['string property proximity returns false', 'customer.name ~= "costo"', false],
        ['number property equality returns true', 'price.low = 300', true],
        ['number property equality returns false', 'price.low = 200', false],
        ['number property inequality returns true', 'price.high != 300', true],
        ['number property inequality returns false', 'price.high != 1000', false],
        ['number property less than returns true', 'price.high < 1100', true],
        ['number property less than returns false', 'price.high < 1000', false],
        ['number property less than or equal returns true', 'price.high <= 1000', true],
        ['number property less than or equal returns false', 'price.high <= 999', false],
        ['number property greater than returns true', 'price.low > 200', true],
        ['number property greater than returns false', 'price.low > 300', false],
        ['number property greater than or equal returns true', 'price.high >= 1000', true],
        ['number property greater than or equal returns false', 'price.high >= 1001', false],
        ['boolean property used directly', 'enabled', true],
        ['boolean property used with negation', 'not enabled', false],
        ['coerced boolean from number property', 'price.high', true],
        ['coerced boolean from array property returns true', 'customer.roles', true],
        ['coerced boolean from array property returns false', 'permissions', false],
        ['array property containing search', 'customer.roles = \"editor\"', true],
        ['array property not containing search returns true', 'customer.roles != \"admin\"', true],
        ['complex query with OR', 'customer.name != "Some customer" or price.low > 200 or price.high < 800', true],
        ['complex query with AND', 'customer.name = "Some customer" and price.low > 200 and enabled', true],
        ['complex query with AND & OR returns true', 'customer.name = "Some customer" and (customer_type != "PREMIUM" or enabled)', true], 
        ['complex query with AND & OR returns false', 'customer.name = "Some customer" and (customer_type != "PREMIUM" or not enabled)', false]]
    
    // @ts-ignore
    test.each(testData)('%s', (name: string, input: string, result: boolean) => {
        const fn = compile(input)
        expect(fn(sampleObj)).toEqual(result)
    })

    const syntaxErrorCases = [
        ['inv/'],
        ['quote_type ='],
        ['quote_type = \"'],
        ['quote_type = \"val\" other="x" another="y"'],
        ['quote_type = \"val\" .toString() we|'],
        ['quote_type = \"val\" and (other="x" or another="y"'],
    ]

    test.each(syntaxErrorCases)('syntax error in %s', (input: string) => {
        const doCompile = () => compile('quote_type="METERED" "abc"')
        expect(doCompile).toThrowError()
    })
})
