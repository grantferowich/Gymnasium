/*
 *  Homework - Binary Heap
 *
 *  Prompt: Create a Binary Heap class
 *  Started engineering on June 2, 2023.
 *  Walked through basics of the d.s.
 * 
 *  The Heap will take in the following input:
 *
 *            type:   {String} - 'min' for minheap, 'max' for maxheap
 *
 *  The Heap will have the following properties:
 *
 *         storage:   {Array} - storage of numbers within heap
 *            type:   {String} - indicates whether heap is a minheap or maxheap
 *
 *  The Heap will have the following methods:
 *
 *        compare:   compares two input numbers and returns if the heap
 *                   condition is met.
 *
 *                   Input:      parent {Number} - index at parent
 *                   Input:      child {Number} - index at child
 *                   Output:     {Boolean}
 *
 *         insert:   inserts a number into the heap.
 *
 *                    Input:     {Number}
 *                   Output:     {undefined}
 *
 *           peek:   returns the top item in the heap
 *
 *                   Input:      N/A
 *                   Output:     {Number}
 *
 *         removePeak:   removes the top element from the heap
 *
 *                    Input:      N/A
 *                   Output:     {Number}
 */

'use strict';


class Heap {

 constructor(typeStr = 'min') {
    this.typeStr = typeStr;
    this.storageArr = []
 }


 // a given left child is at 2i
 // a given right child is at 2i + 1
 // parent of arr[i] is arr[i/2]

 // Time Complexity: O(1)
 // Auxiliary Space Complexity: O(1)
 compare(parentInt, childInt) {
    let parentNumInt = this.storageArr[parentInt];
    let childNumInt = this.storageArr[childInt]
    if (parentInt !== childInt * 2 || parentInt !== childInt * 2 + 1){
      return false
    } 
    if (this.typeStr === 'min' && parentNumInt > childNumInt){
      return false
    }
    if (this.typeStr === 'max' && parentNumInt < childNumInt){
      return false
    }
    return true
 }



 // Time Complexity:
 // Auxiliary Space Complexity:
 insert(valueInt) {

  const traverse = (indexInt, valueInt) => {
    
    // insert a new min element into a min heap
    if (this.storageArr[0] > valueInt && this.typeStr === 'min'){
        this.storageArr.unshift(valueInt)
        return;
    }

    // insert a new max element into a max heap
    if (this.storageArr[0] < valueInt && this.typeStr === 'max'){
      this.storageArr.unshift(valueInt);
      return;
    }

    if (this.typeStr === 'min' && )



    // recursive cases 
    if (valueInt > this.storageArr[indexInt] && this.typeStr === 'min'){
      traverse(indexInt * 2, valueInt)
    }

    if (valueInt < this.storageArr[indexInt] && this.typeStr === 'max'){
      traverse(indexInt * 2, valueInt)
    }


  }

  traverse(0,valueInt)
 }


 // Time Complexity:
 // Auxiliary Space Complexity:
 peek() {
   // YOUR WORK HERE
 }


 // Time Complexity: O(log(N))
 // Auxiliary Space Complexity: O(1)
 // Time Complexity:
 // Auxiliary Space Complexity:
 removePeak() {
   // YOUR WORK HERE
 }

}
  /* 
                           [1]
                        /     \
                      [2]       [3]
                    /   \      /  
                  [5]   [7]  [12]
  
  */
let minHeap1 = new Heap('min')
minHeapArr1.storageArr= [1,2,3,5,7,12] 
// is minHeapArr1[1] the parent of minHeapArr[6]? 
// No. minHeapArr[1]'s children are [2] and [3].
minHeapArr1.compare()