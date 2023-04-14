/**
 * Letter Sort
 *
 * Given a string of letters, return the letters in sorted order.
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 * 
 * // approach -> get the charCode of each letter
 * // init a frequencyMap<charStr,frequencyInt>
 * // init a charCodeMap<charStr, charCodeInt>
 * 
 * 
 * 
 */

const letterSort = (str) => {
    str = str.toLowerCase()
    let letterArr = new Array(26).fill(0)
    let xInt = 0;
    let outputStr = '';
    while (xInt < str.length){
        // let charStr = str[xInt];
        let charCodeInt = str.charCodeAt(xInt) - 97
        letterArr[charCodeInt] = letterArr[charCodeInt] + 1 || 1
        xInt++
    }

    xInt = 0
    while (xInt < letterArr.length){
        if (letterArr[xInt] > 0) {
            charCodeInt = xInt + 97
            let charStr = String.fromCharCode(charCodeInt)
            outputStr += charStr;
            letterArr[xInt]--
            if (letterArr[xInt] > 0){
                xInt--
            }
        }
        xInt++
    }
    
    return outputStr
}

/* TESTS */

const word1 = 'hello' // --> ehllo
const result1 = letterSort(word1)
console.log(`Result 1: ${result1}`)

const word2 = 'whiteboard' // --> abdehiortw
const result2 = letterSort(word2)
console.log(`Result 2: ${result2}`)

const word3 = 'one' //--> eno
const result3 = letterSort(word3)
console.log(`Result 3: ${result3}`)