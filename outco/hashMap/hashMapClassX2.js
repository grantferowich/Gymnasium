/*
 *  Homework - Hash Table
 *
 *  Problem: Hash Table
 *
 * Attempted on May 23, 2023.
 * Successfuly attempted on May 24, 2023. 
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
        this.storageArr = Array(this.bucketsInt);
        this.sizeInt = 0;
        let xInt = 0;
        while (xInt < this.storageArr.length){
            this.storageArr[xInt] = Array()
            xInt++
        }
    }

    // Time complexity: O(N)
    // Auxiliary space complexity: O()
    // dbjb2 hashing function
    hash(keyStr, bucketsInt){
        let hashInt = 5381;
        let xInt = 0;
        while (xInt < keyStr.length){
            let charInt = keyStr.charCodeAt(xInt)
            hashInt = ((hashInt << 5) + hashInt) + charInt;
            xInt++;
        }
        hashInt = Math.abs(hashInt);
        return Math.abs(hashInt % bucketsInt);
    }

    insert(keyStr, valueStr){
        let bucketInt = this.hash(keyStr, this.bucketsInt);
        let bucketArr = this.storageArr[bucketInt];
        if (!bucketArr) {
            bucketArr = [];
            this.storageArr[bucketInt] = bucketArr;
        }
        if (bucketArr.length === 0 || bucketArr === undefined){
            bucketArr.push([keyStr, valueStr]);
            this.sizeInt++;
            return;
        }
        let xInt = 0;
        while (xInt < bucketArr.length){
            let tempKeyStr = bucketArr[xInt][0];
            if (tempKeyStr === keyStr){
                bucketArr[xInt][1] = valueStr;
                return;
            }
            xInt++;
        }
        bucketArr.push([keyStr, valueStr]);
        this.sizeInt++;
        this.resize();
        return
    }

    get(keyStr){
        let bucketInt = this.hash(keyStr, this.bucketsInt);
        let bucketArr = this.storageArr[bucketInt];
        let xInt = 0;
        if (bucketArr.length === 1 && bucketArr[0][0] === keyStr){
            return bucketArr[0][1];
        }
        while (bucketArr.length > 0 && xInt < bucketArr.length){
            let tempKeyStr = bucketArr[xInt][0];
            if (tempKeyStr === keyStr){
                return bucketArr[xInt][1];
            }
            xInt++;
        }
    }

    resize(keyStr){
        // increase the number of buckets
        let loadFactorInt = this.sizeInt / this.bucketsInt;
        // map does not need to be resized
        if (loadFactorInt > 0.25 && loadFactorInt < 0.75){
            console.log('map does not need to be resized');
            return;
        }
        // map does not need to be resized
        if (loadFactorInt <= 0.25 && this.bucketsInt === 8){
            console.log('map does not need to be resized');
            return;
        }
        // resize map
        if (loadFactorInt >= 0.75 && this.bucketsInt >= 8){
            console.log('Map is being resized: Expansion.');
            let int = this.bucketsInt;
            this.bucketsInt = int * 2;
        } else if (loadFactorInt <= 0.25 && this.bucketsInt > 8){
            console.log('Map is being resized: Contraction.');
            let int = this.bucketsInt;
            this.bucketsInt = int / 2;
        }
        const tempArr = [...this.storageArr]
        this.storageArr = Array(this.bucketsInt);
        let iInt = 0;
        while (iInt < this.storageArr.length){
            this.storageArr[iInt] = [];
            iInt++;
        }
        let xInt = 0;
        while (xInt < tempArr.length){
            let bucketArr = tempArr[xInt];
            if (bucketArr.length === 0){
                xInt++;
                continue;
            }
            if (bucketArr.length === 1){
                let keyStr = bucketArr[0][0];
                let valueStr = bucketArr[0][1];
                this.sizeInt--;
                this.insert(keyStr, valueStr);
            } else {
                let jInt = 0;
                while (jInt < bucketArr.length){
                        let keyStr = bucketArr[jInt][0];
                        let valueStr = bucketArr[jInt][1];
                        this.sizeInt--;
                        this.insert(keyStr, valueStr);
                        jInt++;
                } 
            }
            console.log('xInt resize', xInt)
            xInt++;
        }
    }
}

/* Tests */

let hashMap1 = new HashMap();
hashMap1.insert('wake', 'forest');
hashMap1.insert('wf', 'university');
hashMap1.insert('philosophy', 'economics');
// console.log(hashMap1) // successfully tested insert(keyStr, valueStr) on May 24, 2023.
let valueStrX1 = hashMap1.get('wf') // successfully tested get(keyStr) on May 24, 2023.
const valueStrX2 = hashMap1.get('philosophy');
// console.log(valueStrX1) // 
// console.log(valueStrX2) // successfully tested get(keyStr) on May 24, 2023.
hashMap1.insert('saint', 'charles');
hashMap1.insert('chicago', 'Illinois');
hashMap1.insert('winston-salem', 'north carolina');
hashMap1.insert('great', 'lakes');
hashMap1.insert('Lake', 'Michigan');
hashMap1.insert('East Troy', 'Wisconsin');
console.log(hashMap1);

/* Test results

HashMap {
  bucketsInt: 16,
  storageArr: [
    [ [Array] ],          [],
    [ [Array], [Array] ], [],
    [ [Array], [Array] ], [],
    [],                   [],
    [ [Array] ],          [],
    [ [Array] ],          [],
    [],                   [ [Array], [Array] ],
    [],                   []
  ],
  sizeInt: 9
}

*/