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
 * `'bbrr' --> 0

// init a hash
// loop over the string
// store the counts of each letter
*/

// Successfully tested the function on 12/10/22. 
const rgb = (string) => {
    //input validity check
    if (!string.includes("r") || !string.includes("g") || !string.includes("b") || string.length === 0){
      return 0;
    }
    let hash = {};
    for (let k = 0; k < string.length; k++){
        let char = string[k]
        if (!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char] += 1;
        }
    }
    return Math.min(hash['r'], hash['g'], hash['b'])
}

console.log(rgb('rgbrgb')) // --> 2
console.log(rgb('rbgrbrgrgbgrrggbbbbrgrgrgrg')) // --> 7