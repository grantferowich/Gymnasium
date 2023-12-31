/*
 * 2g. Merge two sorted arrays
 *
 * Input:   arr1 {Array}
 * Input:   arr2 {Array}
 * Output:  Array
 *
 * Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
 */

const mergeTwoSortedArrays = (arr1, arr2) => {

    let mergedArr = []
    const merge = (array1, array2, depthInt1, depthInt2) => {

        if (depthInt1 === arr1.length && depthInt2 < arr2.length){
            let remainingArr = arr2.slice(depthInt2);
            mergedArr = [...mergedArr, remainingArr];
            return;
        }

        if (depthInt2 === arr2.length && depthInt1 < arr1.length){
            let remainingArr = arr1.slice(depthInt1);
            mergedArr = [...mergedArr, remainingArr];
            return;
        }

        if (array1[depthInt1] <= array2[depthInt2]){
            mergedArr.push(array1[depthInt1]);
            merge(array1, array2, depthInt1 + 1, depthInt2);
        }
        if (array1[depthInt1] > array2[depthInt2]){
            mergedArr.push(array2[depthInt2]);
            merge(array1, array2, depthInt1, depthInt2 + 1);
        }

    }

    merge(arr1, arr2, 0, 0);
    return mergedArr;
}

/* TESTS */
const arr1 = [1, 4, 7]
const arr2 = [2, 3, 6, 9]

const result1Arr = mergeTwoSortedArrays(arr1, arr2)

console.log(`Result 1: ${result1Arr}`)

/* TEST RESULTS

Result 1: 1,2,3,4,6,7,9

*/