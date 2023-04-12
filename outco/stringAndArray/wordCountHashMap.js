/* 
Word Count

Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

const wordCount = (str) => {
    // remove punctuation 
    str = str.replaceAll('.','')
    str = str.replaceAll('!','')
    str = str.replaceAll(',','')
    // replace capitalized letters with lower case letters
    str = str.replaceAll("'", '').toLowerCase()


    let wordsArr = str.split(' ')
    // console.log(wordsArr )

    // init map
    // wordFreqMap<wordStr, frequencyInt>
    let wordFreqMap = {}
    let xInt = 0

    while (xInt < wordsArr.length){
        let wordStr = wordsArr[xInt]
        wordFreqMap[wordStr] = wordFreqMap[wordStr] + 1 || 1
        // if (wordFreqMap[wordStr]){
        //     let frequencyInt = wordFreqMap[wordStr]
        //     wordFreqMap[wordStr] frequencyInt+1)
        // }

        // if (!wordFreqMap.has(wordStr)){
        //     wordFreqMap.set(wordStr, 1)
        // }

        xInt++
    }

    for (let key in wordFreqMap){
        console.log(key + ' => ' + wordFreqMap[key])
    }
}

/* TESTS */
console.log('/// Result 1')
const data1 = 'The cat and the hat.' 
const result1 = wordCount(data1)


console.log('/// Result 2')
const data2 = 'As soon as possible.'
const result2 = wordCount(data2)


console.log('/// Result 3')
const data3 = "It's a man, it's a plane, it's superman!"
const result3 = wordCount(data3)