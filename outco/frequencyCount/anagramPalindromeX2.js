/**
 *  Anagram Palindrome
 *
 *  Given a string, determine if the string can be rearranged to form a palindrome.
 *
 *  A palindrome is a word that is the same as its reversed. For example: "racecar"
 *  and "noon" are palindromes because they match their reversed version
 *  respectively. On the other hand, "cat" is not a palindrome because "cat"
 *  does not equal "tac".
 *
 *  Parameters
 *  Input: str {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *
 *  Assume the string only contains lowercase letters and no spaces.
 *
 *  Time: O(N)
 *  Space: O(1)
 *
 *  Examples
 *  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
 *  `"cat" --> false`
 * 
 * init a charFrequencyMap
 * init a variable flag
 * if the is one instance of a frequency of 1 increment the flag by 1
 * return flag <== 1
 * 
 */

const anagramPalindrome = (str1) =>{

    let xInt = 0;
    let charFrequencyMap = new Map();
    let flagInt = 0;

    while (xInt < str1.length){
        let char = str1[xInt]
        if (charFrequencyMap.has(char)){
            let frequencyInt = charFrequencyMap.get(char)
            charFrequencyMap.set(char, frequencyInt+1)
        }

        if (!charFrequencyMap.has(char)){
            charFrequencyMap.set(char, 1)
        }
        xInt++
    }

    for (let [key, value] of charFrequencyMap){
        if (value < 2){
            flagInt++
        }
    }
    return flagInt <= 1

}

/* TESTS */

const data1 = 'carrace'
const result1 = anagramPalindrome(data1)
console.log(`Result 1: ${result1}`)
// Expect true

const data2 = 'cat'
const result2 = anagramPalindrome(data2)
console.log(`Result 2: ${result2}`)
// Expect false

/* TESTS RESULTS

Result 1: true
Result 2: false

*/
