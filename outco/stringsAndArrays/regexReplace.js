/* 
1) Remove Spaces
input: a string
output: a version of the string without spaces

2) Remove punctuation 
input: a string
output: a string with spaces yet without punctuation

3) Remove spaces, make all lowercase, remove all punctuation
*/

const removeSpaces = (string) => {
    string = string.replace(/[\s]/g, "")
    return string
}
console.log(removeSpaces("Wake Forest University")) // expected output: WakeForestUniversity | actual output: WakeForestUniversity
console.log(removeSpaces('saint charles')) // expected output: saintcharles | actual output: 