/* 

Minimum Window Substring With Repeating Characters

Find the minimum window in the string containing all of the characters
from the target string. 

Test 1: 
const string2 = 'ADOBECODEBAANC';
const targetStr2 = 'AABC';

output: 'BAANC'

Test 2: 
const string5 = 'wakeforestuniversitywildlife'
const targetString5 = 'stii'
possibilities: 
    1. 'stuniversi' : 10
    2. 'sitywi': 6

output: 'sitywi'

Reason: "witywi" contains all 
of the targtet characters in string and is also 
the smallest window which fulfills the requirement
of containing all the target targets. 
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
