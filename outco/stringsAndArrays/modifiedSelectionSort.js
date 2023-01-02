/**
 * Modified Ferowich Selection Sort
 * 
 * The interesting selection sort values are v between the 25th and 75th percentiles.
 * Find the min value of the unsorted array. 
 * Find the max value of the unsorted array.
 * Set lower = ((max - min)/4)
 * Set upper = (3(max - min)/4)
 * const findV = Math.floor(Math.random * upper)
 * if v < lower then call findV again
 * 
 * Only use v values in selection sort which are within some range of useful values.
 * The result is that selection sort never runs with the worst case run time (O(N^2))
 * The result is that selection sort is gauranteed to run with the best case runtime (NlogN).
 * The next steps are to implement the algorithm and test the runtimes. 
 * Then, compare the runtimes with mergesort on large inputs.  
 *      
 * input: array, target
 * output: location of the target or else null 
 * runtime: O(N)
 * space complexity: O(N)
 */

const ferowichQuickSort = (array, index) => {
    let min = Infinity;
    let max = 0;

    for (let x = 0; x < array.length; x++){
        if (array[x] < min){
            min = array[x]
        }
        if (array[x] > max){
            max = array[x]
        }
    }

    let lowestAcceptable = parseInt((max-min)/3)
    let highestAcceptable = parseInt((3*(max))/4)    

    const findV = (highestAcceptable, lowestAcceptable) => {
       let v = parseInt(Math.random() * highestAcceptable)
       if (v < lowestAcceptable){
            return findV(highestAcceptable, lowestAcceptable)
       } else {
        return v;
       }
    }
   
    let val = findV(highestAcceptable, lowestAcceptable)

    let leftSublist = [];
    let equalSublist = [];
    let rightSublist = [];
    for (let x = 0; x < array.length; x++){
        let num = array[x];
        if (num === val){
            equalSublist.push(num)
        } 
        if (num < val){
            leftSublist.push(num)
        }
        if (num > val){
            rightSublist.push(num)
        }
    }
    if (leftSublist.length+equalSublist.length < )


}
ferowichQuickSort([1,2,3,4,5,6,7,8,9,10], 10)

// const testRandomness = (array) =>{
//     let occurrences = {};

//     for (let x = 0; x < 1000; x++){
//         let num = ferowichSelectionSort(array);
//         occurrences[num] = occurrences[num] + 1 || 1;
//     }
//     return occurrences
// }
// console.log(testRandomness([1,2,3,4,5,6,7,8,9,10]))