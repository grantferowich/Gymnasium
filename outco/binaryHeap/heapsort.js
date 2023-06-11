/*
 * Complete the 'heapsort' function below.
 *  
 * Engineered on June 11, 2023.
 * 
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
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
    console.log('arr', arr)
    return arr;
}