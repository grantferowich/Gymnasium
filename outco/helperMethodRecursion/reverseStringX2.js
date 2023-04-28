/*
 * 2c. Reverse a string
 *
 * Successfully tested the function on April 28, 2023. 
 * 
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */

const reverseString = (str) => {
    let outputStr = ''
    const reverseChar = (depth) => {
        if (depth < 0){
            return
        }
        outputStr += str[depth]
        reverseChar(depth - 1)
    }
    reverseChar(str.length - 1)
    return outputStr
}

/* TESTS */
const str1 = 'hello'
const str2 = 'wake forest'
const str3 = 'chicago'

const result1 = reverseString(str1)
const result2 = reverseString(str2)
const result3 = reverseString(str3)

console.log(`Result 1: ${result1}`)
console.log(`Result 2: ${result2}`)
console.log(`Result 3: ${result3}`)

/* TEST RESULTS 

Result 1: olleh
Result 2: tserof ekaw
Result 3: ogacihc

*/