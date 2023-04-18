/**
 * Sort Digits
 *
 * Given an integer, sort the digits in ascending order and return the new integer.
 * Ignore leading zeros.
 *
 * Parameters.
 * Input: num {Integer}
 * Output: {Integer}
 *
 * Constraints.
 * Do not convert the integer into a string or other data type.
 *
 * Time: O(N) where N is the number of digits.
 * Space: O(1)
 *
 * Examples
 * 8970 --> 789
 * 32445 --> 23445
 * 10101 --> 111
 * 
 * 321 --> 123
 * 
 * init integerFrequencyMap<integer,frequency>
 * divide number by 10 while number is greater than 0
 * set the remainder as a key in the integerFrequencyMap
 *  -> if the integer already exists in the integerFrequencyMap increment the frequency integer
 * 
 * loop from 1 to 9 with xInt
 * if xInt exists in the integerFrequencyMap
 * append xInt to the outputInt v times
 * 
 * return outputNumber
 */

const sortDigits = (int) => {
    let integerFrequencyMap = new Map()
    let xInt = 1
    let outputInt = ''
    while (int > 0){
        let key = int % 10

        if (integerFrequencyMap.has(key) ){
            let frequencyInt = integerFrequencyMap.get(key)
            integerFrequencyMap.set(key, frequencyInt + 1)
        }

        if (!integerFrequencyMap.has(key) && key !== 0){
            integerFrequencyMap.set(key, 1)
        }
        int = Math.floor(int / 10)
    }

    while (xInt < 10){
        if (integerFrequencyMap.has(xInt)){
            let value = integerFrequencyMap.get(xInt)
            let vInt = 0
            while (vInt < value){
                outputInt += xInt
                vInt++
            }

        }
        xInt++
    }

    return parseInt(outputInt)
}

/* TESTS */

const data1 = 321
const result1 = sortDigits(data1)
console.log(`Result 1: ${result1}`)


const data2 = 8970
const result2 = sortDigits(data2)
console.log(`Result 2: ${result2}`)

const data3 = 32445
const result3 = sortDigits(data3)
console.log(`Result 3: ${result3}`)

const data4 = 10101
const result4 = sortDigits(data4)
console.log(`Result 4: ${result4}`)