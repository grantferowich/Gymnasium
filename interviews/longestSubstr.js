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

const longestSubstr = (s) => {
    let accumulator = new Set
    let maxUniques = 0;
    for ( i = 0; i < s.length; i++ ){
        for ( j = i; j < s.length; j++ ){
            if (!accumulator.has(s[j])){
                accumulator.add(s[j])  
            } 
        maxUniques = Math.max(accumulator.size, maxUniques)
        }
    }
    return maxUniques
}

module.exports = longestSubstr