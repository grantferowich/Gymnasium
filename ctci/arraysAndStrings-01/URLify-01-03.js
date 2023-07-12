/* 

URLify
CTCI 01.03
Successfully tested urlify on July 12, 2023.

Write a method to replace all spaces in a string with '%20.' 
You may assume that the string has sufficient space at the end
to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use 
a character array so that you can perform this operation in place.)

const str1 = "wake forest university"
output: "wake%20forest%20university%20"

const str2 = "saint charles illinois"
output: "saint%charles%20illinois%20"

*/

const urlify = (str = '') => {
    return str.replaceAll(' ', '%20') + '%20'
}

/* Tests */
const str1 = 'wake forest university';
const str2 = 'saint charles illinois';
const resultStr1 = urlify(str1);
const resultStr2 = urlify(str2);
console.log('Result 1: ', resultStr1)
console.log('Result 2: ', resultStr2)

/* Test results

Result 1:  wake%20forest%20university%20
Result 2:  saint%20charles%20illinois%20

*/