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
 * runtime: O(N). The algorithm takes O(N) time to find a "lucky" v, that is, a v within the 25th and 75th percentile of the array range.
 * After finding the lucky v, the algorithm partitions the list into three sublists in linear time.
 * Finally, the array uses either merge sort which takes quasilinear time or, the function
 * could recursively produce a new lucky v in the target partition and continuously find new v's
 * until the target is found. By continuously using the Ferowich qucik sort on one of the partitions the function can basically
 * gaurantee the function will take O(N) time to find a given element in an unsorted array.
 * The O(N) is faster than normal linear search through an unsorted array, 
 * because partitioning means arrays of size roughly n/2 on average are searched.
 * Since the function continuously chops the array in half, on average, according to the lucky v
 * the runtime is expected to be logN, which is much faster than linear time on large inputs. 
 * Recursively call f quick sort until the target element is the first element in the sublist.
 * When the element at the 0th index of the sublist is the target element, return. 
 * Another idea is to call a merge function on the singleton sublists, but, at this point, you are basically doing the nlogn runtime algorithm.
 * 
 * 
 * 
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