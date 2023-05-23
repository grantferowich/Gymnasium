/*
 *  Homework - Hash Table
 *
 *  Problem: Hash Table
 *
 *  Prompt: Create a hash table class using separate chaining.
 *
 *  The HashTable will have the following properties:
 *
 *         storage:  {Array} - an array of arrays.
 *         buckets:  {Integer} - the maximum number of buckets that your
 *                   storage can contain. Initially set to 8.
 *           size:   {Integer} count of key-value pairs in the storage
 *
 *  The HashTable will also have the following methods:
 *
 *           hash:   Method that takes a key and bucket number and provides a
 *                   hashed value. The dbjb2 hashing function has been
 *                   provided.
 *
 *                   Input:      key {String}
 *                   Input:      buckets {Integer}
 *                   Output:     index {Integer}
 *
 *         insert:   Method that adds a key-value pair into the storage. If the
 *                   key already exists, the value should be updated. Use
 *                   separate chaining to handle collisions.
 *
 *                   Input:      key {String}
 *                   Input:      value {String}
 *                   Output:     {Undefined}
 *
 *            get:   Method that given a key, return its corresponding value.
 *                   If the key does not exist, return null.
 *
 *                   Input:      key {String}
 *                   Output:     value {String}
 *
 *         remove:   Method that takes a key as its input, and looks for the
 *                   and removes the key-value pair from the bucket.
 *
 *                   Input:      key {String}
 *                   Output:     {Undefined}
 *
 *         resize:   If the load factor reaches a critical 0.75 or higher,
 *                   double the number of buckets. Make sure the number
 *                   of buckets do not fall below 8 and re-index all key-value
 *                   pairs if bucket size is changed.
 *
 *                   Input:      key {String}
 *                   Output:     {Undefined}
 *
 *  Input: N/A
 *  Output: A HashTable instance
 */

'use strict';


class HashTable {
    constructor() {
        this.storage = [];
        this.bIntuckets = 8;
        this.size = 0;
    }


 // Time Complexity: O(N)
 // Auxiliary Space Complexity: O(1)
 hash(key, buckets) {
   let hash = 5381;
   for (let i = 0; i < key.length; i++) {
     let char = key.charCodeAt(i);
     hash = ((hash << 5) + hash) + char;
   }
   return hash % buckets;
 }


 // Amortized Time Complexity (amortized):
 // Auxiliary Space Complexity (amortized):
 insert(key, value) {
    const index = this.hash(key, this.bIntuckets);
    if (this.storage[index] === undefined){
     this.storage[index] = [];
    }
    
    const bucket = this.storage[index];
 
    // for updating
    for (let x = 0; x < bucket.length; x++){
     if (bucket[x][0] === key) {
       bucket[x][1] = value;
       return;
     }
    }
    bucket.push([key, value]);
    this.size++;
    let loadFactor = this.size / this.bIntuckets;
    if (loadFactor > 0.75){
     this.resize()
    }
 }


 // Time Complexity:
 // Auxiliary Space Complexity:
 get(key) {
    const index = this.hash(key, this.bIntuckets);
    const bucket = this.storage[index];
    if (bucket === undefined){ return null;}
    for (let x = 0; x < bucket.length; x++){
       if (bucket[x][0] === key){
         return bucket[x][1];
       }
    }
    return null;
 }


 // Amortized Time Complexity (amortized):
 // Auxiliary Space Complexity (amortized):
 remove(key) {
    const index = this.hash(key, this.bIntuckets);
    const bucket = this.storage[index];
    if (bucket === undefined) {return null} 
    for (let x = 0; x < bucket.length; x++){
      if (bucket[x][0] === key){
        bucket.splice(x, 1);
        this.size--;
      }
    }  
 }


 // Time Complexity: O(N)
 // Auxiliary Space Complexity: O(N)
 resize() {
    const loadFactor = this.size / this.bIntuckets;
    if (loadFactor <= 0.25 && this.bIntuckets >= 16){
      let newBuckets = this.bIntuckets * 0.5;
      this.bIntuckets = newBuckets;
    }
    
    let newBucketsX;
    if (loadFactor >= 0.75){
      newBucketsX = this.bIntuckets * 2;
      this.bIntuckets = newBucketsX
      console.log('doubling buckets..')
    }
    
    let pairs = this.storage;
    this.storage = [];
    for (let x = 0; x < pairs.length; x++) {
      let bucket = pairs[x];
      if (bucket !== undefined){
        for (let j = 0; j < bucket.length; j++) {
            this.insert(...bucket[j]);
          }
      }
    }
 }
}

let hashTable = new HashTable()
hashTable.insert('college', 'wake forest university')
hashTable.insert('nickname', 'mother, so dear')
hashTable.insert('degrees offered', ['b.a.', 'b.s.', 'j.d.', 'm.b.a.', 'm.d.', 'm.a.', 'ph.d.'])
hashTable.insert('season', 'fall')
hashTable.insert('season2', 'winter')
hashTable.insert('season3', 'spring')
hashTable.insert('locations', ['winston-salem', 'charlotte'])

// console.log(hashTable.get('college')) // 'wake forest university'
// console.log(hashTable.get('nickname')) // 'mother, so dear'
// console.log(hashTable.get('degrees offered'))
// console.log(hashTable.remove('season'))
// console.log(hashTable.storage)
console.log(hashTable.size)
console.log(hashTable.buckets)
