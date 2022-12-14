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


const longestSubstring = (s) => {
    let aPointer = 0;
    let bPointer = 0;
    let longestString = 0;
    let charSet = new Set();

    while (bPointer < s.length) {
        if (!charSet.has(s[bPointer])){
            charSet.add(s[bPointer]);
            bPointer++;
            longestString = Math.max(charSet.size, longestString);
        } else {
            charSet.delete(s[aPointer]);
            aPointer++;
        }
    }
    return longestString
}


module.exports = longestSubstring

