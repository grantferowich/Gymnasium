/*
 *  Homework - Hash Table
 *
 *  Problem: Hash Table
 *
 * Attempted on May 23, 2023.
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


    /* 
    inputs: k-v pair
    Procedure: 
    1, calculate hash value for determining
    where the k-v pair will be inserted
    2, store the bucketArr based on the hashInt from (1)
    3, Loop over the bucket to check if the keyStr already exists
        -> if keyStr already exists, update the valueStr
        -> if keyStr does not exist, push the key-value pair into the bucketArr
    
    */

    insert(keyStr, valueStr){
        // bucket index where the present key-value pair will be inserted
        let bucketInt = hash(keyStr, this.bucketsInt);
        // arr of key-value pairs
        let bucketArr = this.storageArr[bucketInt];
        let xInt = 0
        while (xInt < bucketArr.length){
            let tempKeyStr = bucketArr[xInt][0]
            // keyStr already exists in the bucket
            if (tempKeyStr === keyStr){
                bucketArr[xInt][1] = valueStr;
                return
            }
            xInt++
        }
        // keyStr does not exist in the bucket 
        bucketArr.push([keyStr, valueStr])

    }

    get(keyStr){

    }

    resize(keyStr){
        
    }

}

let hashMap1 = new HashMap();
map1.set('wake', 'forest')
console.log(map1)
