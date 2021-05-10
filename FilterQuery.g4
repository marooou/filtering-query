grammar FilterQuery;

query
  : orExpression EOF
  ;

orExpression
  : andExpression ( OR andExpression )*
  ;

andExpression
  : baseExpression ( AND baseExpression )*
  ;

baseExpression
  : parenthesisExpression
  | notExpression
  | comparisonExpression
  | booleanExpression
  ;

parenthesisExpression
  : LPAR orExpression RPAR
  ;

notExpression
  : NOT baseExpression
  ;

comparisonExpression
  : ATTRIBUTE_NAME operator value
  ;

booleanExpression
  : ATTRIBUTE_NAME
  ;

operator
   : EQ
   | NE
   | LT
   | LE
   | GT
   | GE
   | APPROX
   ;

value
  : NUMBER
  | STRING
  | bool
  ;

bool
  : TRUE
  | FALSE
  ;

LPAR: '(';
RPAR: ')';
COMMA: ',';

OR: 'or';
AND: 'and';
NOT: 'not';

EQ: '=';
NE: '!=';
GT: '>';
GE: '>=';
LT: '<';
LE: '<=';
APPROX: '~=';

/* TODO: this should be changed to: [a-zA-Z_]+ ('.' [a-zA-Z0-9_]+)* */
ATTRIBUTE_NAME: [a-zA-Z_][a-zA-Z0-9_.]*; // 

NUMBER: (([-+])? ([0-9])+ | ([-+])? ([0-9])* '.' ([0-9])+);

fragment
STRING_CONTENT: (~[\n\r\f\\"] | '\\"' | '\\\\')*;

STRING : '"' STRING_CONTENT '"';

TRUE: 'true';
FALSE: 'false';

SPACE: [ \t]+ -> skip ;