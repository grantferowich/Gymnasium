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
 *                   double the number of buckets. If the load factor is 0.25
 *                   or less, half the number of buckets. Make sure the number
 *                   of buckets do not fall below 8 and re-index all key-value
 *                   pairs if bucket size is changed.
 *
 *                   Input:      key {String}
 *                   Output:     {Undefined}
 *
 *  Input: N/A
 *  Output: A HashTable instance
 */

class HashMap{
    constructor(){
        this.bucketsInt = 8;
        this.storageArr = Array(this.buckets);
        this.sizeInt = 0
    }

    // Time complexity: O(N)
    // Auxiliary space complexity: O()
    // dbjb2 hashing function
    hash(keyStr, bucketsInt){
        // some random constant int
        let hashInt = 5381;
        let xInt = 0;
        while (xInt < keyStr.length){
            // each char will have some value between 97 and 123
            let charInt = key.charCodeAt(xInt)
            // let hashInt be shifting over five times, added to the constant, and then
            // add the char int
            // each keySr passed into the function will generate a different 
            // hashInt, unless there is a collision
            hashInt = ((hashInt << 5) + hashInt) + charInt;
            xInt++;
        }
        return hashInt % bucketsInt;
    }

    insert(keyStr, valueStr){

    }

    get(keyStr){

    }

    resize(keyStr){
        
    }

}