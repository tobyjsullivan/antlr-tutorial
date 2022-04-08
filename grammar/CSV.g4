grammar CSV ;
file : record+ ;
record : field (',' field)* '\r'? '\n' ;
field : INT | STRING ;
INT : [0-9]+ ;
STRING : '"' .*? '"' ; // anything in quotes
WS : [ \t]+ -> skip ;
