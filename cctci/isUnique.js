//implement an algorithm to determine if a string has all unique characters.
// What if you cannot use an additional data structure?

// isUnique("axx")
// expected output: false

// isUnique("abc")
// expected output: true

// Solution 1: Initialize a hash. 
// For each character in the string let the character be a key 
// let the value for each key be true
// if checking the value of a key reads a true value
// then there is a repeated character, the string is not unique, return false

const isUnique = (s) => {
    let hash = {}

   for (let i = 0; i < s.length; i++){
        value = s[i];
        if (hash[value]) {
            console.log('false');
            return false
        } 
        hash[value] = true;
   }
   console.log('true')
   return true
}

isUnique("axx") // false 
isUnique("abc") // true 


