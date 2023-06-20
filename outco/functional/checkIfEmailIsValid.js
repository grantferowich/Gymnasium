/* 
Check if an email is valid

Successfully tested the function June 20, 2023.
*/

const checkIfEmailIsValid = (emailStr) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)
}

const emailStr1 = 'email.test';
const emailStr2 = 'linkedlist@gmail.com';

const result1ToF = checkIfEmailIsValid(emailStr1);
const result2ToF = checkIfEmailIsValid(emailStr2);

console.log('Result 1: ', result1ToF)
console.log('Result 2: ', result2ToF)