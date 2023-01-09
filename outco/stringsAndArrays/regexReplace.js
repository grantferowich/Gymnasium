/* 
Successfully tested the following three methods on 1/9/23.

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
    string = string.replace(/[\s]/g, "");
    return string;
}
console.log(removeSpaces("Wake Forest University")) // expected output: WakeForestUniversity | actual output: WakeForestUniversity
console.log(removeSpaces('saint charles')) // expected output: saintcharles | actual output: saintcharles

// \w is word, so, ^\w is not word
// replace all things which are not words (i.e. punctuation) with empty chars
const removePunctuation = (string) => {
    string = string.replace(/[^\w]/g, "");
    return string;
}
console.log(removePunctuation('Winston-Salem')) // expected output: WinstonSalem | actual: WinstonSalem
console.log(removePunctuation('St.Charles')) // expected output: StCharles | actual: StCharles
console.log(removePunctuation('wake forest university')) // expected output: wakeforestuniversity | actual: wakeforestuniversity


// the "opening" for regex and "close" for regex consists in the / and / 
// the stuff between / and / decides what to replace
// the g flag indicates the scope is global, so, replace all instances, not just the first one 
// the [] also is required for "opening" and "closing" the regex conditions
// by writing ^ we write not
// the \w means words
// the \ slash is used to introduce conditions
// so, this following statement says, "replace the stuff that is not a word with
// empty chars then convert the whole thing to lowercase"
const removeAllStuffExceptLowerCaseWords = (string) => {
    string = string.replace(/[^\w]/g, "").toLowerCase()
    return string;
}

console.log(removeAllStuffExceptLowerCaseWords('Wake Forest University')) // expected output: wakeforestuniversity | actual output: wakeforestuniversity