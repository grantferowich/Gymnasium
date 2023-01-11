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

function letterSortQuasilinear(string) {
 let array = string.split("");
 let sortedArray = array.sort();
 return sortedArray.join("");
}

console.log(letterSort("hello"))
console.log(letterSort("grantjosephfrancisferowich"))
console.log(letterSort("wakeforestuniversity"))