/**
 * RGB Set
 *
 * Given a string of characters where each character is either 'r', 'g', or 'b',
 * determine the number of complete sets of 'rgb' that can be made with the
 * characters.
 *
 * Parameters
 * Input: str {String}
 * Output: {Integer}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7` 
 * `'bbrr' --> 0`
 * 
 * init charMap<char, freqInt>
 * take the min of charMap<'r'>, charMap<'g'>, charMap<'b'>
 * 
 */

const rgbSet = (str) => {

    let charMap = new Map();
    let xInt = 0;
    while (xInt < str.length){
        let char = str[xInt];
        
        if (charMap.has(char)){
            let frequencyInt = charMap.get(char)
            charMap.set(char, frequencyInt+1)
        }

        if (!charMap.has(char)){
            charMap.set(char, 1);
        }

     
        xInt++
    }

    let min = Math.min(charMap.get('r'), charMap.get('g'), charMap.get('b')) 
    return min > 0 ? min : 0
}

/* TESTS */
// `'rgbrgb' --> 2`
const data1 = 'rgbrgb';
const result1 = rgbSet(data1)
console.log(`Result 1: ${result1}`)

const data2 ='rbgrbrgrgbgrrggbbbbrgrgrgrg' // --> 7
const result2 = rgbSet(data2)
console.log(`Result 2: ${result2}`)

const data3 = 'bbrr' // --> 0`
const result3 = rgbSet(data3)
console.log(`Result 3: ${result3}`)