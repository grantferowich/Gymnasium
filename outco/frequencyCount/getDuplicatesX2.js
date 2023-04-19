/**
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 * 
 *  init charFrequencyMap<char, frequencyInt>
 *  loop over the array
 *  add chars to the charFrequencyMap 
 *  if the char exists in the map, increment the frequency integer by 1
 * 
 *  loop over each key-value pair in the map
 *  if the frequency/value is greater than 1
 *  append the key to the output array
 */

const getDuplicates = (arr) =>{
    let charFrequencyMap = new Map();
    let outputArr = []
    let xInt = 0;
    while (xInt < arr.length){
        let key = arr[xInt]
        if (charFrequencyMap.has(key)){
            let frequencyInt = charFrequencyMap.get(key)
            charFrequencyMap.set(key, frequencyInt+1)
        }
        if (!charFrequencyMap.has(key)){
            charFrequencyMap.set(key, 1)
        }
        xInt++
    }

    for (let [key, value] of charFrequencyMap){
        if (value > 1){
            outputArr.push(key)
        }
    }
    return outputArr
}

/* TESTS */
const data1 = [1, 2, 4, 2] // --> [2]
const test1 = getDuplicates(data1)
console.log(`Result 1: ${test1}`)

const data2 =  [3, 2, 3, 2, 3, 3, 4] // --> [3, 2]
const test2 = getDuplicates(data2)
console.log(`Result 2: ${test2}`)

const data3 = [1, 2, 3, 4] // --> []
const test3 = getDuplicates(data3)
console.log(`Result 3: ${test3}`)