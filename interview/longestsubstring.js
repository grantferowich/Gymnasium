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

const longestsubstring = (s) => {
    let accumulator = new Set();
    let maxUniques = 0;
    for ( i = 0; i < s.length; i++ ){
        for ( j = i; j < s.length; j++ ){
            if (accumulator.has(s[j])){
              break
            } else {
                accumulator.add(s[j])   
            }
         
        maxUniques = Math.max(accumulator.size, maxUniques)
        
        }
    }
    console.log(maxUniques);
   
}



y = "abcabcbb" // 3
// longestsubstring(y)


// Solution 2: The solution uses an array instead of a set.
// The relevant methods used are .includes, .push, and .length,


const longestsubstringarray = (s) => {
    let array = [];
    let maxUniques = 1;
    for ( i = 0; i < s.length; i++ ){
        for ( j = i; j < s.length; j++ ){
            if (array.includes(s[j])){
              break
            } else {
                array.push(s[j])   
            }
         
        maxUniques = Math.max(array.length, maxUniques)
        
        }
    }
    console.log(maxUniques);
}


y = "abcabcbb" // 3 // abc // ca // bc // a // b // c // bca // cab  
longestsubstringarray(y)
