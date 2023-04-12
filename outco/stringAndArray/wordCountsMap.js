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
    let wordFreqMap = new Map()
    let xInt = 0

    while (xInt < wordsArr.length){
        let wordStr = wordsArr[xInt]
        
        if (wordFreqMap.has(wordStr)){
            let frequencyInt = wordFreqMap.get(wordStr)
            wordFreqMap.set(wordStr, frequencyInt+1)
        }

        if (!wordFreqMap.has(wordStr)){
            wordFreqMap.set(wordStr, 1)
        }

        xInt++
    }
    return [...wordFreqMap]
}

/* TESTS */
const data1 = 'The cat and the hat.' 
const result1 = wordCount(data1)
console.log(`Result 1: ${result1}`)

const data2 = 'As soon as possible.'
const result2 = wordCount(data2)
console.log(`Result 2: ${result2}`)

const data3 = "It's a man, it's a plane, it's superman!"
const result3 = wordCount(data3)
console.log(`Result 3: ${result3}`)