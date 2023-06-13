/*
 *  Homework - Binary Heap
 *
 *  Prompt: Create a Binary Heap class
 *  Started engineering on June 2, 2023.
 *  Walked through basics of the d.s.
 *  June 13: I have implemented constructor, 
 *  compare, getParentIndexInt, getChildIndexInt, 
 *  swap, insert, and peek.
 * 
 *  June 13, 2023: 
 *  I have successfully tested all methods in the binary heap class.
 *  I completed the removePeak() method today, June 13, at 8:20 a.m.
 *  I implemented bubble down.
 *  Recall to remove the peak, the peak is swapped with the last element in the array,
 *  then there is a call to bubble down the new root. 
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
    const parentNumInt = this.storageArr[parentInt];
    const childNumInt = this.storageArr[childInt]

    if (this.typeStr === 'min'){
      // return whether the min heap condition is true
      // return true if the child is larger than the parent
      return parentNumInt <= childNumInt
    } 
    // return whether the max heap condition is true
    // return true if the child is less than the parent
    if (this.typeStr === 'max' ){
      return parentNumInt >= childNumInt
    }
 }

  // engineered and tested getParentIndexInt on June 12, 2023 at 8:56 am
 getParentIndexInt(childIndexInt){
  let parentIndexInt = Math.floor(childIndexInt / 2);
  return parentIndexInt
 }

 getChildIndexInt(parentIndexInt){
  let childIndexInt1 = parentIndexInt * 2 + 1
  let childIndexInt2 = parentIndexInt * 2 + 2;

  if (childIndexInt1 > this.storageArr.length){
    return childIndexInt1;
  } else if (childIndexInt2 > this.storageArr.length){
    return childIndexInt2;
  }

  if (this.typeStr === 'min' && this.storageArr[childIndexInt1] < this.storageArr[childIndexInt2]){
    return childIndexInt1
  } 

  if (this.typeStr === 'max' && this.storageArr[childIndexInt1] > this.storageArr[childIndexInt2]){
    return childIndexInt1
  }

  return childIndexInt2

 }

  // engineered and tested swap on June 12, 2023 at 8:56 am
 // Runtime: O(1)
 // Space complexity: O(1)
 swap(iInt, jInt){
  [this.storageArr[iInt], this.storageArr[jInt]] = [this.storageArr[jInt], this.storageArr[iInt]];
 }

  // engineered and tested bubbleUp on June 12, 2023 at 8:56 am
 // Runtime: O(log(N))
 // Space complexity: O(1)
 bubbleUp(childIndexint) {
  const parentIndexInt = this.getParentIndexInt(childIndexint);
  if (parentIndexInt < 0){
    return 
  }
  // swap
  if (this.typeStr === 'min' && this.storageArr[parentIndexInt] > this.storageArr[childIndexint]){
    this.swap(childIndexint, parentIndexInt);
    return this.bubbleUp(parentIndexInt);
  }

  // swap
  if (this.typeStr === 'max' && this.storageArr[parentIndexInt] < this.storageArr[childIndexint]){
    this.swap(childIndexint, parentIndexInt);
    return this.bubbleUp(parentIndexInt);
  }

  return 
 }



 bubbleDown(parentIndexInt){
  let childIndexInt = this.getChildIndexInt(parentIndexInt);

  if (this.typeStr === 'min' & this.storageArr[parentIndexInt] > this.storageArr[childIndexInt]){
    this.swap(parentIndexInt, childIndexInt);
    return this.bubbleDown(childIndexInt)
  }

  if (this.typeStr === 'max' & this.storageArr[parentIndexInt] < this.storageArr[childIndexInt]){
    this.swap(parentIndexInt, childIndexInt);
    return this.bubbleDown(childIndexInt)
  }

  return 
 }
 // engineered and tested insert on June 12, 2023 at 8:56 am
 // Time Complexity: O(log(N))
 // Auxiliary Space Complexity: O(1)
 insert(valueInt) {
  this.storageArr.push(valueInt)
  this.bubbleUp(this.storageArr.length - 1)
 }


 // Time Complexity: O(1)
 // Auxiliary Space Complexity: O(1)
 peek() {
    return this.storageArr[0]
 }


 // Time Complexity: O(log(N))
 // Auxiliary Space Complexity: O(1)
 // Time Complexity:
 // Auxiliary Space Complexity:
 removePeak() {
  if (this.storageArr.length === 1){
    let rootInt = this.storageArr.pop()
    console.log('removing rootInt - ', rootInt)
    return rootInt
  } 
  
  this.swap(0, this.storageArr.length - 1);
  this.bubbleDown(0)
  let peakInt = this.storageArr.pop();
  return peakInt; 
 }

}
  /* 
                           [1]
                        /     \
                      [2]       [3]
                    /   \      /  
                  [5]   [7]  [12]
  
  */
// let minHeap1 = new Heap('min')
// minHeapArr1.storageArr= [1,2,3,5,7,12] 
// // is minHeapArr1[1] the parent of minHeapArr[6]? 
// // No. minHeapArr[1]'s children are [2] and [3].
// minHeapArr1.compare()




function assert(count, name, test) {
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}


function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}


console.log('Heap Class');
let testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
 let heap = new Heap();
 return typeof heap === 'object';
});

assert(testCount, 'has storageArr property', () => {
 let heap = new Heap();
 return heap.hasOwnProperty('storageArr');
});

assert(testCount, 'has typeStr property', () => {
 let heap = new Heap();
 return heap.hasOwnProperty('typeStr');
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Heap compare method');
testCount = [0, 0];

assert(testCount, 'has compare method', () => {
 let heap = new Heap();
 return Object.prototype.toString.apply(heap.compare) === '[object Function]';
});

assert(testCount, 'returns true for minheap if element at first argument index is less than element at second argument index', () => {
 let heap = new Heap('min');
 heap.storageArr.push(1);
 heap.storageArr.push(10);
 return heap.compare(0, 1) === true;
});

assert(testCount, 'returns false for minheap if element at first argument index is greater than element at second argument index', () => {
 let heap = new Heap('min');
 heap.storageArr.push(10);
 heap.storageArr.push(1);
 return heap.compare(0, 1) === false;
});

assert(testCount, 'return true for maxheap if element at first argument index is greater than element at second argument index', () => {
 let heap = new Heap('max');
 heap.storageArr.push(10);
 heap.storageArr.push(1);
 return heap.compare(0, 1) === true;
});

assert(testCount, 'return false for maxheap if element at first argument index is less than element at second argument index', () => {
 let heap = new Heap('max');
 heap.storageArr.push(1);
 heap.storageArr.push(10);
 return heap.compare(0, 1) === false;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Heap insert method');
testCount = [0, 0];

assert(testCount, 'has insert method', () => {
 let heap = new Heap();
 return Object.prototype.toString.apply(heap.insert) === '[object Function]';
});

assert(testCount, 'should be able to insert a single element', () => {
 let heap = new Heap();
 heap.insert(5);
 return heap.storageArr[0] === 5;
});

assert(testCount, 'minimum value should be on top of a minheap', () => {
 let heap = new Heap('min');
 heap.insert(5);
 heap.insert(10);
 heap.insert(7);
 heap.insert(1);
 heap.insert(8);
 heap.insert(6);
 return heap.storageArr[0] === 1;
});

assert(testCount, 'maximum value should be on top of a maxheap', () => {
 let heap = new Heap('max');
 heap.insert(5);
 heap.insert(10);
 heap.insert(7);
 heap.insert(1);
 heap.insert(8);
 heap.insert(6);
 return heap.storageArr[0] === 10;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Heap peek method');
testCount = [0, 0];

assert(testCount, 'has peek method', () => {
 let heap = new Heap();
 return Object.prototype.toString.apply(heap.peek) === '[object Function]';
});

assert(testCount, 'should return the top element of the heap', () => {
 let heap = new Heap();
 heap.storageArr.push(1);
 heap.storageArr.push(5);
 heap.storageArr.push(10);
 return heap.peek() === 1;
});

assert(testCount, 'should return the smallest element for a minheap', () => {
 let heap = new Heap();
 heap.insert(2);
 heap.insert(5);
 heap.insert(10);
 heap.insert(1);
 return heap.peek() === 1;
});

assert(testCount, 'should return the largest element for a maxheap', () => {
 let heap = new Heap('max');
 heap.insert(2);
 heap.insert(5);
 heap.insert(10);
 heap.insert(1);
 return heap.peek() === 10;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Heap removePeak method');
testCount = [0, 0];

assert(testCount, 'has removePeak method', () => {
 let heap = new Heap();
 return Object.prototype.toString.apply(heap.removePeak) === '[object Function]';
});

assert(testCount, 'should be able to remove a single element', () => {
 let heap = new Heap();
 heap.insert(5);
 heap.removePeak();
 return heap.storageArr.length === 0;
});

assert(testCount, 'should be able to remove and return min', () => {
 let heap = new Heap('min');
 heap.storageArr = [1,2,7,4,9,10,8,6];
 let example = heap.removePeak();
 return example === 1 && arraysEqual([2,4,7,6,9,10,8], heap.storageArr);
});

assert(testCount, 'should be able to remove and return max', () => {
 let heap = new Heap('max');
 heap.storageArr = [10,9,6,8,3,5,2,7];
 let example = heap.removePeak();
 return example === 10 && arraysEqual([9,8,6,7,3,5,2], heap.storageArr);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');
