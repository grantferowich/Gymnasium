/* 

True or False Evaluation

CTCI 8.14

Data attempted: 03/24/23
*/
const tOrFEvaluation = (str = '', ToF = false) => {
    if (!str && !ToF){
        return 0;
    }
    let countInt = 0
    const eval = (str, depth) => {
        if (depth >= str.length){
            return
        }
        let operand1 = parseInt(str[depth], 2) 
        let operator = str[depth+1]
        let operand2 = parseInt(str[2 + depth], 2) 
        console.log(`str[${depth}] ${str[depth]}`)
        console.log(`str[${depth + 1}] ${str[depth+1]}`)
        console.log(`str[${depth + 2}] ${str[depth + 2]}`)

        console.log('operand1', operand1)
        console.log('operand2', operand2)

        if (operator === '^' && (operand1 ^ operand2) && ToF === true){
            countInt++
            console.log('^ and count change')
        }
        if (operator === '^' && !(operand1 ^ operand2) && ToF === false){
            countInt++
            console.log('^ and count change')
        }
        if (operator === '&' && (operand1 & operand2) && ToF === true){
            countInt++
            console.log('& and count change')
        }
        if (operator === '&' && !(operand1 & operand2) && ToF === false){
            countInt++
            console.log('& and count change')
        }
        if (operator === '|' && (operand1 | operand2) && ToF === true){
            countInt++
            console.log('| and count change')
        }
        if (operator === '|' && !(operand1 | operand2) && ToF === false){
            countInt++
            console.log('| and count change')
        }
        eval(str, depth + 2)
    }
    eval(str, 0)
    return countInt
}

/* TESTS */

console.log(tOrFEvaluation("1^0|0|1", false));

// 1 ^ 0 true, false, x
// 0 | 0 false, false, increment
// 0 | 1 true, 

// const inputArr1 = [ [0, false], [undefined, false], [null, false], ["1^0|0|1", false], ["0&0&0&1^1|0", true] ]

// // Expect: 0, 0, 0, 2, 10
// const runTests = (inputArr) => {
//     let xInt = 0
//     while (xInt < inputArr.length){
//         let testInputStr = inputArr1[xInt][0]
//         let testInputToF = inputArr1[xInt][0]
//         let resultInt = tOrFEvaluation(testInputStr, testInputToF);
//         console.log(`Test ${xInt}: ${resultInt}`)
//         xInt++
//     }
// }

// return runTests(inputArr1)