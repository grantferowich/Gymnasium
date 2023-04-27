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
 * initialize a fixed array with 26 slots, fill each slot with a 0
 * loop over the input string
 * capture and store the charCode of each char with .charCodeAt
 * get arrayLocationInt with charCode - 97
 * increment the value of the fixed array at arrayLocationInt by 1
 * [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
 * wake = 22, 1, 11, 5
 * [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0]
 * loop over the fixed array
 * if the element is greater than 0, store the element as valueInt
 * get the charCodeInt with arrayLocationInt + 97
 * get charCodeStr from CharCodeInt with CharCodeFrom(charCodeInt)
 * while xInt is less than valueInt append charCodeStr to outputStr 
 * 
 */


const letterSort = (str) => {
    let fixedArr = new Array(26).fill(0);
    let outputStr = '';
    let xInt = 0;

    while (xInt < str.length){
        let char = str[xInt];
        let charCodeInt = char.charCodeAt(0);
        
        let arrayLocationInt = charCodeInt - 97;
        let tempValInt = fixedArr[arrayLocationInt] 
        tempValInt += 1
        fixedArr[arrayLocationInt] = tempValInt
        xInt++
    }

    xInt = 0 
    while (xInt < fixedArr.length){
        let valueInt = fixedArr[xInt]
        let yPtrInt = 0
        charCodeInt = 97 + xInt
        let char = String.fromCharCode(charCodeInt)
 
        if (valueInt > 0){
            while (yPtrInt < valueInt){
                outputStr += char
                yPtrInt++
            }
        }
        xInt++
    }
    return outputStr
}

/* TESTS */
const str1 = 'hello'
const str2 = 'whiteboard'
const str3 = 'one'

const resultStr1 = letterSort(str1)
const resultStr2 = letterSort(str2)
const resultStr3 = letterSort(str3)

console.log(`Result 1: ${resultStr1}`)
console.log(`Result 2: ${resultStr2}`)
console.log(`Result 3: ${resultStr3}`)

/* TEST RESULTS 

Result 1: ehllo
Result 2: abdehiortw
Result 3: eno

*/