// Successfully tested the function 1/18/23 
// typeof [] actually returns object
// to check if an element is an array the Array.isArray(x) method must be used
/* 


1. state the return var
2. 


*/
function flatten(array){
    let flattened = [];
  
    const makeFlat = (subarray) => {
        // if the type of the element is an array itself
        // make recursive call
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