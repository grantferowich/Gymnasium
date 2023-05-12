/*
 * Minimum Window Substring (Sliding Window)
 *
 * Wrote down on May 9, 2023
 * Successfully tested the function on May 11, 2023.
 * 
 * Given a string, and a set of characters
 * return the substring representing the SMALLEST
 * window containing those characters.
 *
 * The characters needn't appear in the order in which they are given.
 * 
 * If not all the characters are present in the string, return the empty string.
 *
 *
 * Input: str   (String)
 *        chars (String)
 *
 * Output: {String}
 *
 *
 * Example:
 *  Input: "ADOBECODEBANC", "ABC"
 *  Output: "BANC"
 *
 *  Input: "HELLO WORLD", "FOO"
 *  Output: ""
 *
 *
 * Explanation:
 *   Though there are many substrings containing all the characters
 *   "BANC" is the shortest.
 *
 * Assume that there won't be repeated characters in the second string input.
 *
 * Ignore capitalization.
 * (though taking it into account doesn't change the solution much)
 *
 * But as extra credit, how would you handle repeats?
 * Meaning if you were given two "A" characters, a valid window MUST
 * contain two "A"s
 *
 *
 * Initialize two pointers called leftPtrInt and rightPtrInt.
 * Initialize a map called charMap.
 * Expand the window by incrementing the rightPtrInt.
 * Expand when the window does not contain all of the chars.
 * Contract when the window contains the chars.
 * 
 * 
 */

const minimumWindowSubstring = (str, chars) => {

    let leftPtrInt = 0;
    let rightPtrInt = 0;

    let leftResultInt = 0;
    let rightResultInt = Infinity;

    let charMap = new Map();
    let xInt = 0;
    let charsInt = chars.length;
    
    // initialize charMap
    while (xInt < chars.length){
        charMap.set(chars[xInt], (charMap.get(chars[xInt]) || 0) + 1);
        xInt++;
    }

    while (rightPtrInt < str.length){

        let rChar = str[rightPtrInt];
        if (charMap.has(rChar)){
            charsInt--;
        }
        rightPtrInt++;

        while (charsInt === 0){
            
            if (rightPtrInt - leftPtrInt < rightResultInt - leftResultInt){
                rightResultInt = rightPtrInt;
                leftResultInt = leftPtrInt;
            }

            let lChar = str[leftPtrInt];
            
            if (charMap.has(lChar)){
                charsInt++;
            }

            leftPtrInt++
        }
    }
    if (rightResultInt === Infinity && leftResultInt === 0){
        return ''
    }
    return str.slice(leftResultInt, rightResultInt)
}

/* Test */
const str1 = 'wakeforestuniversity';
const char1 = 'es';

const str2 = 'adobecodebanc';
const char2 = 'abc';

const str3 = 'hello world';
const char3 = 'foo'

const resultStr1 = minimumWindowSubstring(str1, char1);
const resultStr2 = minimumWindowSubstring(str2, char2);
const resultStr3 = minimumWindowSubstring(str3, char3);

console.log(`Result 1: ${resultStr1}`);
console.log(`Result 2: ${resultStr2}`);
console.log(`Result 3: ${resultStr3}`)

/* Test results


*/
