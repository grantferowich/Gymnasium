// Letter Sort
// Given a string of letters, return the letters in sorted order.
/** 
* Parameters
* Input: str {String}
* Output: {String}
*
* Constraints
* Time: O(N)
* Space: O(N)
*
* Examples
* `hello --> ehllo`
* `whiteboard --> abdehiortw`
* `one --> eno`

*/   
   
// create static array with 26 elements
// find the base 26 location by subtracting 97 from the unicode value
// store k-v pairs with occurrences as values
   
const letterSortLinearTime = (string) => {
   
       let stringChars = string.toLowerCase();
       let characters = new Array(26).fill(0);
       let returnWord = "";
   
       //generate hash with char code value as key and visits as value in k-v pair 
       for (let i = 0; i < stringChars.length; i++){
           characters[string[i].charCodeAt() - 97] += 1;
       } 
       for (let x = 0; x < characters.length ; x++){
           returnWord += String.fromCharCode(x+97).repeat((characters[x]));
       }
       return returnWord;
   }
console.log(letterSortLinearTime('hello'))
console.log(letterSortLinearTime('wakeforestuniversity'))