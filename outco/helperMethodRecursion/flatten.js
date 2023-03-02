/* 
Flatten Array

Successfully tested the function 1/18/23 
Notes: In JavaScript, typeof [] actually returns object instead of an array.
To check if a thing is an array the Array.isArray(x) method must be implemented.

Complexity analysis: 
Time: O(N)
Auxiliary: O(N)
Total Space: O(N)
*/
function flatten(array){
    let flattened = [];
  
    const makeFlat = (subarray) => {
        // If the type of the element is an array itself
        // the makeFlat(x) function must call itself recursively
      for (let x = 0; x < subarray.length; x++){
        if (Array.isArray(subarray[x])){
            makeFlat(subarray[x]);
        } else {
            flattened.push(subarray[x])
        }
      }
    }  
    makeFlat(array);
    return flattened;
}

console.log(flatten([1,[2,3,[4]]])) // [1, 2, 3, 4]
console.log(flatten([])) // []
console.log(flatten([1,[2,3,[4],[23]]])) // [1, 2, 3, 4, 23]

// let x = [1,2,3]
// let y = {name: "Grant"}
// let z = 
// console.log(typeof x)
// console.log(Array.isArray(x)) //true 
// console.log(typeof y)