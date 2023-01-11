// Successfully tested the solution on 12/22/22. 
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
    let inputChars = string.toLowerCase();
    let sortedChars = "";
    for (let x = 0; x < inputChars.length ; x++){
        // char to num
        let char = string[x].CharCodeAt()
        if (sortedChars.length = )
        returnWord += String.fromCharCode(x+97).repeat((characters[x]));
    }
    return returnWord;
}

console.log(letterSortLinearTime('hello'))
console.log(letterSortLinearTime('wakeforestuniversity'))