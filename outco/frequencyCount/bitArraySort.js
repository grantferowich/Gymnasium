/**
 * Challenge 1: Sort a Bit Array
 * Given a bit array, return it sorted in-place 
 * (a bit array is simply an array that contains 
 * only bits, either 0 or 1).
 * 
 * See if you can solve this in O(N) time and O(1) auxiliary space.
 * Try to solve this using a frequency count rather than using 
 * multiple pointers, or using a comparison sort function.
 * 
 * Input : [0, 1, 1, 0, 1, 1, 1, 0]
 * Output : [0, 0, 0, 1, 1, 1, 1, 1]
 *
 * // iterate over the array
 * // if number is 0, arr[0]++
 * // if number is 1, arr[1]++ 
 * // let zeroCount = arr[0]
 * // let oneCount = arr[1]
 * 
 * from i to 0 count, set arr[i] to 0
 * from 0count+1 to array.length-1, set arr[j] to 1
 * 
 * 
 * Time complexity: O(N)
 * input space complexity: O(N)
 * aux space: O(3) => O(1)
 * 
 * Successfully defined and tested a solution 
 * to sort a bit array in place using a frequency counter. 
 */


const bitArraySortWithFrequencyCount = (array) => {
    let zeroCount = 0;
    for ( let i = 0; i < array.length; i++){
        if (array[i] === 0){
            zeroCount++
        }
    }
    for (let j = 0; j < array.length; j++){
        if (j < zeroCount){
            array[j] = 0;
        } else {
            array[j] = 1;
        }
    }
    return array
}

console.log(bitArraySortWithFrequencyCount([0, 1, 1, 0, 1, 1, 1, 0])) // [0, 0, 0, 1, 1, 1, 1, 1]