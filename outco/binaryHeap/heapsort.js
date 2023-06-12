/*
 * Complete the 'heapsort' function below.
 *  
 * Engineered on June 11, 2023.
 * Successfully tested the function on June 12, 2023. 
 * 
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 * 
 * Heapsort 
 *  -> Heapify: converts array into a max heap
 *  -> Sortify: converts max heap into a sorted array
 * 
 */
const getChildIndexInt = (arr, parentIndexInt, boundaryInt) => {
    let childIndexInt1 = parentIndexInt * 2 + 1;
    let childIndexInt2 = parentIndexInt * 2 + 2;
    
    
    // boundary // say you have 8 elements, 8's children are at 15 and 16
    // handle OOB child indices inside the function calling getChildIndexInt
    if (childIndexInt1 >= boundaryInt){
        return childIndexInt1
        // boundary
    } else if (childIndexInt2 >= boundaryInt){
        return childIndexInt1
        // child1 is greater => return childIndexInt1
    } else if (arr[childIndexInt1] > arr[childIndexInt2]){
        return childIndexInt1
    } else {
        // child2 is greater => return childIndexInt2
        return childIndexInt2
    }
}

const swap = (arr, int1, int2) => {
    [arr[int1], arr[int2]] = [arr[int2], arr[int1]];
}

const bubbleDown = (arr, parentIndexInt, boundaryInt) => {
    let childIndexInt = getChildIndexInt(arr, parentIndexInt, boundaryInt);
    // if the childIndexInt is outside the boundary
    // never enter the while loop
    while (childIndexInt < boundaryInt && arr[parentIndexInt] < arr[childIndexInt]){
        // swap
        swap(arr, parentIndexInt, childIndexInt);
        parentIndexInt = childIndexInt
        // ensure the new parent is greater than its two children 
        childIndexInt = getChildIndexInt(arr, parentIndexInt, boundaryInt)
    }
}

const heapsort = (arr) => {
    let xInt = arr.length - 1;
    // iterate backwards through the array 
    while (xInt > -1) {
        // call bubbleDown() at each index
         bubbleDown(arr, xInt, arr.length)
         xInt--;
    }
    // console.log('arr', arr)
    
    let wallInt = arr.length - 1;
    while (wallInt > -1){
        swap(arr, 0, wallInt)
        bubbleDown(arr, 0, wallInt)
        wallInt--;
    }
    return arr;


}


/* Tests */

const arr1 = [10, 111, 9, 23, 5, 7, 2, 8, 3, -4, 20]
const arr2 = [99, 912, 349, 8123, 900, 120, 54, 23, 231, 981]


const result1Arr = heapsort(arr1)
const result2Arr = heapsort(arr2)

console.log('Result 1:', result1Arr)
console.log('Result 2:', result2Arr)

/* Test results 

After running heapify: heapsort, bubbleDown, swap, getChildIndexInt
you basically have a max heap 
the max heap looks like this:
arr: [ 111, 9, 23, 5, 7,
    2, 8, 3, -4, -20 ]

After running sortify: swap, bubbleDown, wallInt--
The array is properly sorted.
Result 1: [
   -4, 2,  3,  5,  7,
    8, 9, 10, 20, 23,
  111
]

Result 2: [
   23,   54,  99, 120,
  231,  349, 900, 912,
  981, 8123
]

*/