// const reader = require('fileReader')
/* 
Brush up on your chosen programming language. 
There are going to be a lot of things that you’ve 
forgotten when you have been coding for your day job 
even using your preferred language. 
I’ve seen people struggling to remember things like:

1. How to read/write from/to files
2. How to read input from the console
3. How to split strings 
4. Is string length a function or a property? 
5. (Answer: it doesn’t matter, but still reflects poorly on you)
How to declare and use 2D arrays

*/

// 1. How to read/write from/to files
const fs = require('fs')
const fileName ='coinFlippingAndDieRolling.js'
const localX = '/Users/knightoffaith/Desktop/Code/DSA/Gymnasium/outco/math/'
const fileX =localX+fileName

// read data
const data = fs.readFileSync(fileX, 'utf8', (err) => { 
    if (err) throw err;
    console.log('error occurred')
})

console.log(data) // this works
// readerX.readAsTest('.jsMethods')

// this will write to the file 
fs.appendFile(fileX, "'Hello World!!!'") // this works. also note use of single quotes inside the double quotation marks

// 2. How to read input from the console

// 3. How to split strings 
let string = "wake forest"
let array = string.split('')
// console.log(array)

// 4. Is string length a function or a property? 
// (Answer: it doesn’t matter, but still reflects poorly on you)
/* 
String.length is a property in JavaScript.
Method calls require you to write linkedList.insert(x),
with the parentheses at the end. If you call .length() with parentheses on
a string, you will see an error `string.length is not a function.`
 */
let string1 = 'wake forest'
// console.log(string1.length()) // Type Error occurs