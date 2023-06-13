// given an array, output a min heap
// in a min heap, the root is the smallest value
// all values must be in increasing order
const getChildIndex = (arr, parentIndex, boundary) => {
    // pass in array, index of parent node, array length
    // create child node indices
    let childIndex1 = 2 * parentIndex + 1;
    let childIndex2 = 2 * parentIndex + 2;
    // decide which child node to swap with 
    // case where child 1 is oob
    if (childIndex1 >= boundary){
        // handle in bubble down
        return childIndex1;
        // case where child 2 is oob
    } else if (childIndex2 >= boundary) {
        // handle in bubble down
        return childIndex1;
        // case where child 1 is larger in a max heap
        // swap with whichever child index is larger
    } else if (arr[childIndex1] < arr[childIndex2]){
        return childIndex1;
    } else {
        return childIndex2;
    }
}

const swapValues = (arr, x1, x2) => {
    [ arr[x1], arr[x2] ] = [ arr[x2] , arr[x1] ]
}

const bubbleDown = (arr, parentIndex, boundary) => {
    let childIndex = getChildIndex(arr, parentIndex, boundary);
    // while the min heap condition is violated
    while (childIndex < boundary && arr[parentIndex] > arr[childIndex]){
        // when the min heap condition is violated swap the parent and child
        // i.e. in a min heap when the parent is smaller than th child node swap the two nodes
        swapValues(arr, parentIndex, childIndex)
        // set parent equal to child and recalculate child index
        parentIndex = childIndex;
        childIndex = getChildIndex(arr, parentIndex, boundary)
    }
}
// iterate backwards through input array
// call bubble down at each index
function minHeapSort(arr) {
    for (let x = arr.length - 1; x > -1; x--){
        this.bIntubbleDown(arr, x, arr.length - 1)
    }
    return arr;
}

/*  
The heap sort function should sort 
the numbers in order from largest to smallest
 */



let input = [4, 15, 16, 50, 8, 23, 42, 108];
console.log(minHeapSort(input)) 
// [108, 50, 42, 15, 8, 23, 16, 4]