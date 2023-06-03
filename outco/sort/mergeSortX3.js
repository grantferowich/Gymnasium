
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
    if (arr.length === 1){
        return arr
    }

    let midPtrInt = parseInt(arr.length / 2)
    let leftArr = arr.slice(0, midPtrInt)
    let rightArr = arr.slice(midPtrInt)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const merge = (leftArr, rightArr) => {
    let leftPtrInt = 0;
    let rightPtrInt = 0;
    let outputArr = []
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
        leftPtrInt++
    }

    while (rightPtrInt < rightArr.length){
        outputArr.push(rightArr[rightPtrInt]);
        rightPtrInt++
    }
    return outputArr
}

/* Tests */
const arr1 = [3, 5, 1, 12, 2];

const result1Arr = mergeSort(arr1)

console.log('Result 1:', result1Arr)

