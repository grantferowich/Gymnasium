/**
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 */

// initialize a hash map
// loop over the array
// each element in the array is a key
// if an element was already observed increment the element's counter
// init duplicatesArray
// for each key in the hash map
// append keys from key value pairs with values greater than 1

const getDuplicates = (arr) => {
    let hash = {};
    for ( let i = 0; i<arr.length; i++){
      if (!hash[arr[i]]) {
        hash[arr[i]] = 1
      } else {
        hash[arr[i]]++
      }
    }
    let duplicatesArray = [];
    for (let key in hash){
      if (hash[key] > 1){
        duplicatesArray.push(parseInt(key));
      } 
    }
    return console.log(duplicatesArray)
}

getDuplicates([1, 2, 4, 2]) // [2]
getDuplicates([3, 2, 3, 2, 3, 3, 4]) //--> [3, 2]
getDuplicates([1, 2, 3, 4]) // --> []
