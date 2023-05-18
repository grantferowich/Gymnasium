/* 
Construct an expression tree from a given postfix notation
and print the infix notation.

For example, the postfix notation a b + c d e + * * results 
in the following expression tree. The corresponding infix notation 
is (a + b) * (c * (d + e)).
*/

class Node{
    constructor(dataInt, leftInt, rightInt){
        this.dataInt = dataInt === undefined ? null : dataInt;
        this.rightInt = rightInt === undefined ? null : rightInt;
        this.leftInt = leftInt === undefined ? null : leftInt;
    }
}

const postfixToInfix = (str) => {

    let stack = []

    let xInt = 0;
    while (xInt < str.length){
        let char = str[xInt];
        if (char === '+' || char === '-' || char === '*' || char === '/'){
            let rightCharStr = s
        }
    }
}

/* Test */

const str1 = "a b + c d e + * *";

/* Test results */