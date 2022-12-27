/**
 * String Compression
 * Medium
 * https://leetcode.com/problems/string-compression/
 * 
 * Implement a method to perform basic string compression
 * using the counts of repeated characters. 
 * 
 * For example, the string aabcccccaaa would become a1b1c5a3.
 * 
 * 1. the algorithm looks at a unique char
 * 2. the algorithm tallies the number of times the unique char appears consecutively
 * 3. the algorithm appends the char and its count to a new string
 * 4. the algoritm moves to the next right-most uniqe char
 * 5. the algorithm repeats steps 1-4 
 * 6. the algorithm returns the new string
 
 *  */

const stringCompression = (string) => {
    let newString = '';
    let count = 1;
    for (let x = 0; x < string.length; x++) {
        let char = string[x];
        if (string[x] === string[x+1]){
            count++
        }
        // if chars are different move up x index
        if (string[x] !== string[x+1] ){
            newString += char + count.toString();
            count = 1;
        }      
    }
    return newString;
}

console.log(stringCompression('abcccccaaa')) // a1b1c5a3.