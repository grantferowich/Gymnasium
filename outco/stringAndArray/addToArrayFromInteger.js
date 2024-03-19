/* 
input: num is an array of integers,
and k, an integer
return a number 
*/

const addToArrayForm = (num, k) => {
    if (num === ''){ return}
    // let number = '';
    let x = 0;
    let number = BigInt(num.join(''));

    let sum = (number + BigInt(k));

    sum = sum.toString();
    return sum.split('');
};

// let num1 = [2,3,0];
// let k1 = 9;
// console.log(addToArrayForm(num1, k1)) // [2,3,9]

let num2 = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
let k2 = 516;
console.log(addToArrayForm(num2, k2)) 
// Expect: [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
// Actual: 