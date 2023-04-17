/**
 * Character Mode
 *
 * Given a string, find the most frequent occurring letter(s) in the string
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * If more than one letter is tied for the most frequent, return a string of all
 * the letters in one string.
 *
 * Upper case characters should count as lower case, and do not include spaces
 * ... as characters.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * 'hello' --> 'l'
 * 'A walk in the park' --> 'a'
 * 'noon' --> 'no'
 * 
 *  init a charFreqMap
 *  store all chars as keys, store the frequency of each char as a value
 *  init the values array from the map
 *  store the maxValueInt as a var
 *  loop through the charFreqMap
 *  if the number is equal to the MaxValueInt, 
 *      push the number to outputStr
 *  return outputStr
 */

const characterMode = (str) => {
    str = str.replaceAll(' ', '')
    str = str.toLowerCase()
    let charFrequencyMap = new Map();
    let maxValueInt = 0
    let outputStr = ''
    let xInt = 0;
    let valuesArr = []

    while (xInt < str.length){
        let charStr = str[xInt]
        if (charFrequencyMap.has(charStr)){
            let frequencyInt = charFrequencyMap.get(charStr)
            charFrequencyMap.set(charStr, frequencyInt + 1)
        }
        if (!charFrequencyMap.has(charStr)){
            charFrequencyMap.set(charStr, 1)
        }
        xInt++
    }

    for (let [key, value] of charFrequencyMap){
        if ( value >= maxValueInt){
            maxValueInt = value
        }
    }

    for (let [key, value] of charFrequencyMap){
        if (value === maxValueInt){
            outputStr+= key
        }
    }

    return outputStr;
}
/* TESTS */
const data1 = 'hello'
const result1 = characterMode(data1)
console.log(`Result 1: ${result1}`) // --> 'l'

const data2 = 'A walk in the park'
const result2 = characterMode(data2)
console.log(`Result 2: ${result2}`) // --> 'a'

const data3 = 'noon'
const result3 = characterMode(data3)
console.log(`Result 3: ${result3}`) // --> 'no'

