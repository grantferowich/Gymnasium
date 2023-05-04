/* // COIN SUM

Attempted May 04, 2023.
Successfully tested the function on May 04, 2023. 

// how many ways can you use the coins to produce the target value?

// Understanding
// Input: integer array and integer
// Output: integer
// Test case: [1,2,3], 4
// Expected output is 4 : 1 + 3, 2+2, 1 + 1 + 1 + 1, 1 + 1 + 2
// Since there are four ways to sum the coins to reach 4
                
                sumInt, coinsArr
                   4, [1,2,3]
subtract (change sumInt)
                /            \       pop (change the coinsArr)
         1,[1,2,3]        4,[1,2]
          /   \             /   \
-2,[`1,2,3] 
        /*
  *  Problem:  Coin Sum
  *
  *            Given an array of coins and a target total, return how many
  *            unique ways there are to use the coins to make up that total.
  *
  *  Input:    coins {Integer Array}, total {Integer}
  *  Output:   {Integer}
  *
  *
  *  Example:  Input:  [1,2,3], 4
  *
  *                    1+1+1+1
  *                    1+3
  *                    1+1+2
  *                    2+2
  *
  *            Output: 4
  *
  *
  *            Input:  [2,5,3,6], 10
  *
  *                    2+3+5
  *                    5+5
  *                    2+3+2+3
  *                    2+2+6
  *                    2+2+2+2+2
  *
  *
  *            Output: 5
  *
  *    Note:   You have an unlimited number of each coin type. All coins in the
  *            coin array will be unique.
  *            Order does not matter. Ex: One penny and one nickel to create six
  *            cents is equivalent to one nickel and one penny
  * 
  * base cases: total is negative
  * all the coins are used up and total is 0
  * all the coins are used up
  * 
 */

const coinSum = (sumInt, coinsArr) => {
    let waysInt = 0;
    let cacheHM = {};

    const change = (sInt, cArr) => {
        let keyStr = sInt + '_' + cArr;

        // console.log(`sInt ${sInt}`)
        // console.log(`cArr ${cArr}`)

        if (sInt < 0){
            return;
        }

        if (cArr.length === 0 && sInt === 0){
            waysInt++;
        }

        if (cArr.length < 0 || !cArr.length){
            return;
        }

        if (cacheHM[keyStr]){
            return cacheHM[keyStr];
        }
        
        // recursive call with changed sInt
        let leftInt = change(sInt - cArr[cArr.length - 1], cArr);

        let poppedInt = cArr.pop();
    
        // recursive call with shortened arr
        let rightInt = change(sInt, cArr);

        cArr.push(poppedInt)
        
        cacheHM[keyStr] = leftInt + rightInt;
        return cacheHM[keyStr];
    }

    change(sumInt, coinsArr)
    return waysInt
}

/* TESTS */

const arr1 = [1,2,3];
const sum1Int = 4;

const arr2 = [2,5,3,6];
const sum2Int = 10;

const result1Int = coinSum(sum1Int, arr1)
const result2Int = coinSum(sum2Int, arr2)

console.log(`Result 1: ${result1Int}`)
console.log(`Result 2: ${result2Int}`)

/* Test Results 

Result 1: 4
Result 2: 5

*/