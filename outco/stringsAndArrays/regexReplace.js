/* 
1) Remove Spaces
input: a string
output: a version of the string without spaces

2) Remove punctuation 
input: a string
output: a string with spaces yet without punctuation

3) Remove spaces, make all lowercase, remove all punctuation
*/

// \s in regex is whitespace
// replace all whitespace with empty chars
const removeSpaces = (string) => {
    string = string.replace(/[\s]/g, "")
    return string
}
console.log(removeSpaces("Wake Forest University")) // expected output: WakeForestUniversity | actual output: WakeForestUniversity
console.log(removeSpaces('saint charles')) // expected output: saintcharles | actual output: saintcharles

// \w is word, so, ^\w is not word
// replace all things which are not words (i.e. punctuation) with empty chars
const removePunctuation = (string) => {
    string = string.replace(/[^\w]/g, "")
    return string
}
console.log(removePunctuation('Winston-Salem')) // expected output: WinstonSalem | actual: WinstonSalem
console.log(removePunctuation('St.Charles')) // expected output: StCharles | actual: WinstonSalem