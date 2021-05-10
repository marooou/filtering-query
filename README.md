Simple expression language for objects filtering
=======
[![Build Status](https://travis-ci.com/marchmiel/object-filtering.svg?branch=master)](https://travis-ci.com/marchmiel/object-filtering)

A simple, safe, JavaScript expression engine, allowing end-users to enter arbitrary expressions without p0wning you.

Installation
------------------

```
npm i --save object-filtering
```

Quick start
------------------

```javascript
import {compile} from 'object-filtering'

// Input from a user (e.g. a search filter)
const expression = 'transactions <= 5 and customer.name = "My customer"';

// Compile expression to an executable function
const fn = compile(expression);

// Execute function
fn({transactions: 3, customer: { name: "My customer" }); // returns true
fn({transactions: 3, customer: { name: "Other customer" }); // returns false
```

Under the hood, the above expression gets compiled to a clean and fast JavaScript function, looking something like this:

```javascript
// Resulting function
function(item) {
  return item.transactions <= 5 && customer.name === "My customer";
}
```

Why?
----

There are many cases where you want a user to be able enter an arbitrary expression through a user interface
to filter/search across items using multiple fields.

Sure, you could do that with JavaScript and `eval()`, but this would increase chances of p0wning you.

This library takes a different approach. It defines a grammar for a really simple expression language, produces a lexer and a parser for it,
and uses it to compile down the expression into a fast JavaScript filtering function, which can be used runtime.

The expression laguage is very simple so that 
anyone who's ever used a spreadsheet
should be familiar with it. 

Moreover, the library provides a type assist functionality based on JSON schema,
so writting an expression is even simplier.

Syntax
-----------

Values | Description
--- | ---
43, -1.234 | Numbers
"hello" | String
foo, a.b.c | External data variable defined by application (may be numbers, strings or arrays)

Comparisons | Description
--- | ---
x = y | Equals
x != y | Does not equal
x < y | Less than
x <= y | Less than or equal to
x > y | Greater than
x >= y | Greater than or equal to
x ~= y | Regular expression match (case insensitive)

Boolean logic | Description
--- | ---
x or y | Boolean or
x and y | Boolean and
not x | Boolean not
( x ) | Explicity operator precedence

Operator precedence follows that of any sane language.

### Examples

```
product.name = "Some product name"
product.price.value >= 100.5 and product.price.value <= 300
product.name ~= "some"
product.name = "Some product" and (product.categories = "Appliances" or product.categories = "Electronics")
product.name = "Some product" and not product.availability
```

See [the grammar definition](./FilterQuery.g4) for more details.