/* 
628. Valid Palindrome II


part tested 04/06/2023.

Given a string s, return true if the s
 can be palindrome after deleting at 
 most one character from it.

Approach
Init two pointers at the start and end of word
check for char equality
there can be at most 1 miss
if missInt > 1 return false
if missInt <= 1 return true

return missInt <= 1
*/

const isPalindrome = function(str) {
    str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    for (let x = 0; x <= str.length; x++){
          if (str[x] !== str[str.length - 1 - x]){
              return false
          }
      }
      return true
};


const validPalindromeII = (str) => {
   let result1 = isPalindrome(str)
   if (result1){ return true}

   let leftPtrInt = 0
   let rightPtrInt = str.length - 1
   while (leftPtrInt < rightPtrInt){
        if (str[leftPtrInt] !== str[rightPtrInt]){
            const skipLeftChar = str.slice(leftPtrInt+1, rightPtrInt+1)
            const skipRightChar = str.slice(leftPtrInt, rightPtrInt)
            return isPalindrome(skipLeftChar) || isPalindrome(skipRightChar)
        }
        leftPtrInt++;
        rightPtrInt--;
   }
   return true;
}

/* TESTS */
const str1 = 'hannah';
const result1 = validPalindromeII(str1);
console.log(`Result 1: ${result1}`);
// Expect true

const str2 = 'hannjah';
const result2 = validPalindromeII(str2);
console.log(`Result 2: ${result2}`);
// Expect true

const str3 = 'abca';
const result3 = validPalindromeII(str3);
console.log(`Result 3: ${result3}`)
// expect true

const str4 = 'abc';
const result4 = validPalindromeII(str4);
console.log(`Result 4: ${result4}`)
// expect false

const str5 = 'cbbcc'
const result5 = validPalindromeII(str5)
console.log(`Result 5: ${result5}`)
// expect false

const str6 = 'wake'
const result6 = validPalindromeII(str5)
console.log(`Result 6: ${result6}`)
// expect false