/**
 *  Anagram Palindrome
 *
 *  Given a string, determine if the string can be rearranged to form a palindrome.
 *
 *  A palindrome is a word that is the same as its reversed. For example: "racecar"
 *  and "noon" are palindromes because they match their reversed version
 *  respectively. On the other hand, "cat" is not a palindrome because "cat"
 *  does not equal "tac".
 *
 *  Parameters
 *  Input: str {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *
 *  Assume the string only contains lowercase letters and no spaces.
 *
 *  Time: O(N)
 *  Space: O(1)
 *
 *  Examples
 *  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
 *  `"cat" --> false`
 */

// initialize a hash with characters as keys and the number of times the character appeared as a value
// a palindrome's keys all have values mod 2 equal to 0 except one
// initialize a frequency counter for the number of times a key occurs whose value mod 2 does not equal zero
// if the frequency of odd values is greater than 1 return false
// I may assume there are no spaces in the input string

function anagramPalindrome(string) {
    if (string.length === 0){
      return false;
    }
    let hash = {};
    let oddsCounter = 0;
    for (let i = 0; i < string.length; i++){
      hash[string[i]] = hash[string[i]] + 1 || 1;
    }
    for (let key in hash){
      if (hash[key] % 2 !== 0){
        oddsCounter++;
      }
    }
    if (oddsCounter > 1){
      return false;
    }
    return true;
   }

   // carrace ==> true since the word can be re-written as racecar
   console.log(anagramPalindrome('carrace')) // true
   console.log(anagramPalindrome('dog')) // false
   console.log(anagramPalindrome('hannah')) // true
   console.log(anagramPalindrome('')) // false
   console.log(anagramPalindrome("hhaann")) // true