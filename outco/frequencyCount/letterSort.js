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

The solution I constructed is an N(log(N)) solution since the solution
uses the .sort() function. 
*/

function letterSort(string) {
 let array = string.split("");
 let sortedArray = array.sort();
 return sortedArray.join("");
}

// console.log(letterSort("hello"))
// console.log(letterSort("grantjosephfrancisferowich"))

// input: a string
// output: sorted string



// create stati array with 26 elements
// find the base 26 location by subtracting 97 from the unicode value
// store k-v pairs with occurrences as values

const letterSort2 = (string) => {

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


console.log(letterSort2('hello'))