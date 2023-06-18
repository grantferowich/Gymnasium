/* 


*/

const minimumWindowWithRepeatingCharacters = (string, targetStr) => {

}





/* Tests */

const string1 = 'ADOBECODEBANC';
const targetStr1 = 'ABC';

const string2 = 'ADOBECODEBAANC';
const targetStr2 = 'AABC';

const string3 = 'DOG';
const targetStr3 = 'WAKE';

const string4 = 'abc';
const targetStr4 = 'cba';

const resultStr1 = minimumWindowWithRepeatingCharacters(string1, targetStr1);
const resultStr2 = minimumWindowWithRepeatingCharacters(string2, targetStr2);
const resultStr3 = minimumWindowWithRepeatingCharacters(string3, targetStr3);
const resultStr4 = minimumWindowWithRepeatingCharacters(string4, targetStr4);

console.log('Result 1: ', resultStr1); // BANC
console.log('Result 2: ', resultStr2); // BAANC
console.log('Result 3: ', resultStr3); // ""
console.log('Result 4: ', resultStr4); // abc
