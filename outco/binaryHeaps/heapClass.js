/*
 *  Homework - Binary Heap
 *
 *  Prompt: Create a Binary Heap class
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
 *   /courses/438359                Output:     {undefined}
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
 // Time Complexity: 
 // Auxiliary Space Complexity:
 removePeak() {
  this.swapValues(0, this.storage.length -1)
  const node = this.storage.pop()
  this.bubbleDown()
  return node
 }

 swapValues(a,b){
  [this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a]];
 }

 getParentIndex(child){
  return Math.floor(( child - 1 ) / 2 );
 }

 getChildIndex(){
  let left = parent * 2 + 1;
  if (left >= this.storage.length - 1 || this.compare(left, left + 1)){
    return left
  }
  return left + 1;
 }

 bubbleUp(){
  let child = this.storage.length - 1;
  let parent = this.getParentIndex(child);
  while ( child > 0 && !this.compare( parent , child )){
    this.swapValues( parent, child );
    child = parent;
    parent = this.getParentIndex( child )
  }
 }

 bubbleDown(){
  let parent = 0;
  let child = this.getChildIndex( parent );
  while ( child < this.storage.length && !this.compare( parent, child )){
    this.swapValues( parent , child );
    parent = child;
    child = this.getChildIndex(child)

  }
 }
}

let heap = new Heap('min')
heap.storage.push(4 , 8 , 16 , 23 , 34 , 55 , 89)
console.log(heap.peek()) // 4
heap.insert(2);
console.log(heap.storage) // [  2,  4, 16,  8, 34, 55, 89, 23 ]
