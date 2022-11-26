// return the longest substring of unique characters in a given string 

// Solution 1: Initialize a set and a counter variable
// Using two loops, push the j'th element into a set 
// unless the set already has the j'th element
// After each inner loop is completed update the 
// counter variable's max number of unique characters 
// The max number of unique characters employs the Math.max() 
// method to compare the variable's existing longest string of uniques
// with the number of unique characters from the most recent inner loop.
// Since the solution implements a Set, the relevant methods used are
// .has, .add, and .size

// use a moving window


const longestSubstr = (s) => {
    let accumulator = {}
    let maxWindowLength = 0;
    let startOfWindow = 0;
    for ( let j = 0; j < s.length; j++ ){
        for ( let x = j; x < s.length; x++){
            let char1 = s[j];
            let char2 = s[x];
            accumulator[char1] = true;
            // stop increasing the window length when a repeat is found 
            if (accumulator[char2]) { 
                maxWindowLength = Math.max(Object.keys(accumulator).length, maxWindowLength);
                accumulator == null;
                break;
            } else {
                accumulator[char2]
            }
        }    
        startOfWindow++
        
    }
    console.log('maxWindowLength', maxWindowLength)
    return maxWindowLength;
}

longestSubstr('pwwkew') // wke => 3
// module.exports = longestSubstr

const longestSubstrX = (s) => {
    let startOfWindow = 0;
    let currentWindowLength = 0;
    let hash = {};
    let maxLength = 1;

    while ( startOfWindow < s.length) {
        let i = 0;
        let char = s[i];
        let char2 = s[i+1]
        hash[char] = true;
        if (hash[char] = true) {
            console.log(Object.keys(hash).length)
            return Object.keys(hash).length
            break
        }


    }

}