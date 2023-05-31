
/**
 *  Homework - Quasilinear Sorts
 *
 *  Attempted the function on May 31, 2023.
 * 
 * 
 *  Mergesort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using mergesort.
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 * 
 *  Worst Time Complexity:
 *  Worst Total (Call Stack + Auxiliary) Space Complexity:
 *  Average Time Complexity:
 *  Average Total (Call Stack + Auxiliary) Space Complexity:
 * 
 * 
 * Procedure
 * Divide recursively until subarrays are 1 element (base case)
 * Merge the two subarrays up every level
 * Return sorted array
 */

const mergeSort = (arr) => {
    // this is the base case
    if (arr.length <= 1){
        return arr;
    }
    
    // recursive case 
    const midPtrInt = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midPtrInt);
    const rightArr = arr.slice(midPtrInt);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {

    let outputArr = [];
    let leftPtrInt = 0;
    let rightPtrInt = 0;
    
    while (leftPtrInt < leftArr.length && rightPtrInt < rightArr.length){
        if (leftArr[leftPtrInt] < rightArr[rightPtrInt]){
            outputArr.push(leftArr[leftPtrInt]);
            leftPtrInt++;
        } else {
            outputArr.push(rightArr[rightPtrInt]);
            rightPtrInt++;
        }
    }
    
    while (leftPtrInt < leftArr.length){
        outputArr.push(leftArr[leftPtrInt]);
        leftPtrInt++;
    }

    while (rightPtrInt < rightArr[rightPtrInt]){
        outputArr.push(rightArr[rightPtrInt]);
        rightPtrInt++;
    }

    return outputArr;
}

/* Test */

const arr1 = [ 3, 9, 1, 4, 7];

const resultArr1 = mergeSort(arr1);

console.log('Result 1: ', resultArr1);

/* Test results */