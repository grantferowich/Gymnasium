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

function letterSort(string) {
 let array = string.split("");
 let sortedArray = array.sort();
 return sortedArray.join("");
}

console.log(letterSort("hello"))
console.log(letterSort("grantjosephfrancisferowich"))