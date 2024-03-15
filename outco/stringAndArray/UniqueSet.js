/* 
Unique Set

Successfully tested the function 04/13/2023.

* Utilize the frequency count pattern to solve these problems.  Use a Hash Set
* or an Array instead of a Hash Table where applicable.
*
* Unique
*
* Given an array of integers, return an array with all duplicates removed.*
*
* Parameters
* Input: arr {Array of Integers}
* Output: {Array of Integers}
*
* Constraints:
*
* Time: O(N)
* Space: O(N)
*
* Examples
* [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
* [1, 1, 2, 2, 3, 3] --> [1, 2, 3]
* [1, 2, 3, 1, 2] --> [1, 2, 3]

init set, uniqueSet
loop over array
add each array element to uniqueSet
extract an outputArray from uniqueSet
return outputArray

*/

const uniqueSet = (arr) => {
    let uniqueSet = new Set();
    let xInt = 0;
    while (xInt < arr.length){
        let elementInt = arr[xInt];
        uniqueSet.add(elementInt);
        xInt++;
    }
    return Array.from(uniqueSet);
}


/* TESTS */
const arr1 = [1, 2, 4, 4, 5, 6];  // --> [1, 2, 4, 5, 6]
const resultArr1 = uniqueSet(arr1);
console.log(`Result 1: ${resultArr1}`);

const arr2 = [1, 1, 2, 2, 3, 3];  // --> [1, 2, 3]
const resultArr2 = uniqueSet(arr2);
console.log(`Result 2: ${resultArr2}`);

const arr3 = [1, 2, 3, 1, 2]; //  --> [1, 2, 3]
const resultArr3 = uniqueSet(arr3);
console.log(`Result 3: ${resultArr3}`);