
/**
 *  Anagram Pair
 * 
 *  Given two strings, determine if the strings are anagrams of one another.
 * 
 *  Two words are anagrams of one another if they contain the same letters.
 *
 *  Parameters
 *  Input: str1 {String}
 *  Input: str2 {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *  With N as the length of the first string, and M as the length of the second string.
 *
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  "cat", "act" --> true
 *  "cat", "dog" --> false
 *  "racecar", "aaccrres" --> false
 */

// do not assume strings are equal length;
// strings with unequal lengths are invalid and the function must return false
// write a helper function taking in a string and returning a hash
// helper function's input is a string
// helper function's output is a hash map
// the returned hash has characters as keys and the frequency of each character as a value
// return the assertion of equality of hash N and hash M
// Successfully tested the function 12/10/22.


// input: string
// output: hm
const charMapMaker = (string) => {
  let hash = {};
  for (let i = 0; i < string.length; i++){
    hash[string[i]] = hash[string[i]] + 1 || 1;
  }
  return hash;
}

// input: str
// output: tof
function anagramPair(string1, string2) {
    if (string1.length !== string2.length){
      return false;
    }
    let hashN = charMapMaker(string1);
    let hashM = charMapMaker(string2);
  
    for (let key in hashN){
      if (hashN[key] !== hashM[key]){
        return false 
      }
    }
    return true;
}
  

// cat and act are anagrams of each other
// dog and cat are not anagrams of each other

console.log(anagramPair("dog", "cat")); // false
console.log(anagramPair("cat", "act")); // true