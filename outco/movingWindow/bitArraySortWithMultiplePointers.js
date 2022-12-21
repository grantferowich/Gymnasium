// Given a bit array, return the array sorted in place using multiple pointers

// input: array
// output: array

// constraints: O(N) space and O(N) runtime

// the problem instructs us to sort the array in place 
// this condition tells us the algorithm must not introduce new data structures
// The input space is O(N). The auxiliary space is O(2). 
// Therefore the space complexity of the algorithm is linear, O(N).

import { PerformanceObserver, performance } from "perf_hooks";
var t0 = performance.now();


const bitArraySort = (array) => {
    let x = 0;
    for (let y = 0; y < array.length; y++){
        if (array[y] === 0){
            // use destructuring assignment to move the element at y 
            // from the y index to the y-1 index
            [array[x], array[y]] = [array[y], array[x]]
            console.log(array)
            x++;
        }
    }
    return array
}

console.log(bitArraySort([1,0,0,1])) // => [0,0,1,1]
console.log(bitArraySort([1,0,0,0,0,0,0,0,0,0,0,1])) // => [0,0,0,0,0,0,0,0,0,0,0,1,1]

const bitArraySortWithTwoPointers = (array) => {

    let left = 0; 
    let right = array.length - 1;

    while (left < right){
        if (array[left] === 0){
            left++;
        } 
        if (array[right] === 1){
            right--;
        }
        if (array[left] === 1){
           [array[left], array[right]] = [array[right], array[left]]
        }
        if (array[right] === 0){
           [array[left], array[right]] = [array[right], array[left]]
        }
    }
return array
}

// console.log(bitArraySortWithTwoPointers([1,0,0,1]));
console.log(bitArraySortWithTwoPointers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1]))
var t1 = performance.now();
console.log("Call to bitArraySortWithTwoPointers took " + (t1 - t0) + " milliseconds.");