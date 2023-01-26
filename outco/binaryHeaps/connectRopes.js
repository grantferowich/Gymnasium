/**
Connect N Ropes with Minimum Cost

Given n ropes of different lengths represented by an array of integers, connect them all into a single rope in a way that minimizes the cost of connecting them.

The cost of connecting two ropes is equal to sum of their lengths. We want to minimize the cost of connecting all the ropes.

Input: ropes, [Integer]
Output: Integer
Example
In: [4, 3, 2, 6]
Out: 29


Explanation:

First we connect 3 + 2 = 5, giving the following ropes: [4,5,6]
Then we connect 5 + 4 = 9, giving the following ropes: [9,6]
Then we connect 9 + 6 = 15, giving the final combination of all ropes: [15]

So in total the cost for the most efficient approach is: 5 + 9 + 15 = 29

A less efficient way would be:

First we connect 4 + 6 = 10, giving the following ropes: [10,3,2]
Then we connect 10 + 3 = 13, giving the following ropes: [13,2]
Then we connect 13 + 2 = 15, giving the final combination of all ropes: [15]

So in total the cost for the less efficient approach is: 10 + 13 + 15 = 38

Although in both cases we need to make the same number of connections, the costs are different


Input: [2, 3, 10, 11]


2 + 3 = 5, [5, 10, 11]
5 + 10 = 15, [11, 15]
11 + 15 = 26,
---------------
46

2+3=5, [5, 10, 11]
10+11=21, [5, 21]
5+21=26, [26]

---------------
52


Output: 2+3 = 5
5+10 = 15
11 + 15 = 26
26 + 15 + 5 = 46 

sum = 5
resultArray = [5, 15, 26]
subresult = 15

[11]

-------------------------

heap = {4, 6, 5, }
heap = {6, 9}
sum = 0
a = 4
b = 5
subsum = 9 
-------------------------

store subresults in a heap 
add the subresult to heap in O(log(N)) runtime 

Pseudocode:

result.push(subresult)

Intermediate:
Time Complexity: O(N log N)
Auxiliary Space Complexity: O(N)

Advanced:
Time Complexity: O(N log N)
Auxiliary Space Complexity: O(1)

N = # of Ropes

Assume you have an existing heap implementation with the following methods:

Heap:
  * add()     O(log(N))
  * remove()  O(log(N))
  * heapify() O(N)
  *

input: [4,3,2,6]
*/

class Heap{
  constructor(type = 'min') {
    this.type = type || null;
    this.storage =  [];
  }
 
  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  compare(parent, child) {
   if (this.type === 'min' && this.storage[parent] < this.storage[child]){
     return true;
   }
   if (this.type === 'max' && this.storage[parent] > this.storage[child]){
     return true;
   }
   return false;
  }
 
 
  // Time Complexity: O(logN)
  // Auxiliary Space Complexity: O(1)
  insert(value) {
   this.storage.push(value);
   // when inserting, the value must be bubbled up from the end of the array
   // to satisfy the heap condition
   this.bubbleUp()
  }
 
 
  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  peek() {
     console.log(this.storage)
    return this.storage[0]
  }
 
 
  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  removePeak() {
   this.swapValues(0, this.storage.length -1)
   const node = this.storage.pop()
   this.bubbleDown()
   return node
  }

  swapValues(a,b){
    let arr = this.storage;
   [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  getParentIndex(child){
    return Math.floor(( child - 1 ) / 2 );
   }

  getChildIndex(parentIndex){
    let arr = this.storage;
    let boundary = arr.length -1; 
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

 
 
  bubbleUp(){
   let child = this.storage.length - 1;
   let parent = this.getParentIndex(child);
   while (child > 0 && !this.compare(parent,child)){
     this.swapValues( parent, child );
     child = parent;
     parent = this.getParentIndex(child)
   }
  }

  bubbleDown(parentIndex, boundary){
    let childIndex = this.getChildIndex(parentIndex);
    let arr = this.storage;
    while (childIndex < boundary && arr[parentIndex] > arr[childIndex]){
      this.swapValues(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this.getChildIndex(childIndex);
    }
  }

  minHeapSort(){ 
    let arr = this.storage;
    for (let x = arr.length - 1; x > -1; x--){
        this.bubbleDown(x, arr.length - 1)
    }
    return this.storage;
  }
}
 
// pass in a heap, not an array
const connectRopes = (heap) => {
  heap.minHeapSort();
  let totalCost = 0;
  while (heap.storage.length > 1){
    let firstMin = heap.storage.shift();
    let secondMin = heap.storage.shift();
    totalCost += firstMin + secondMin;
    console.log('firstMin', firstMin);
    console.log('secondMin', secondMin);
    heap.storage.unshift(firstMin + secondMin);
    heap.minHeapSort()
  }
  return totalCost;
}


const heap = new Heap('min')
heap.storage=[4,3,2,6];
console.log(heap.storage)
console.log(heap.minHeapSort())
console.log(heap.storage)
/* 
[2,3,4,6]
[5,3,4,6]


totalCost += 5
totalCost += 5
*/

console.log(connectRopes(heap)) // 29

