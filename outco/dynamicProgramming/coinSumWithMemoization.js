/* // COIN SUM

Successfully tested the function 04/05/2023.

// how many ways can you use the coins to produce the target value?

// Understanding
// Input: integer array and integer
// Output: integer
// Test case: [1,2,3], 4
// Expected output is 4 : 1 + 3, 2+2, 1 + 1 + 1 + 1, 1 + 1 + 2
// Since there are four ways to sum the coins to reach 4

                 4, [1,2,3]
subtract       /            \       pop
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
  * // base cases: total is negative
  * all the coins are used up and total is 0
  * all the coins are used up
 */

const coinChangeWithMemoization = (targetInt, coinsArr) =>{
    // create a cache
    let cache = {};
    let ways = 0;

    const findWays = (totalInt, coinsArr) => {
        // create a key
        let key = totalInt.toString() + "_" + coinsArr.length
        // check the cache for the key
        if (cache[key]){
            return cache[key];
        }
        // destination: coins have been used up to bring total to 0
        if (totalInt === 0 && coinsArr.length === 0){
            ways++ 
        }
        // base case
        if (totalInt < 0){
            return 
        }
        if (coinsArr.length === 0){
            return
        }
        // two recursive cases: traverse left and traverse right
        // traversing left means subtracting
        let left = findWays(totalInt - coinsArr[coinsArr.length - 1], coinsArr);
        // traverse right means popping
        let popped = coinsArr.pop();
        // recursive call with shorter coins array
        let right = findWays(totalInt, coinsArr)
        // backtrack to put the coin back on the array
        coinsArr.push(popped);
        let result = left + right
        cache[key] = result
        return result
    }
    findWays(targetInt, coinsArr)
    return ways > 0 ? ways : -1
}

/* TESTS */
// const arr1 = [1,2,3];
// const int1 = 4;

console.log(coinChangeWithMemoization(4, [1,2,3])) // 4
console.log(coinChangeWithMemoization(10, [2,5,3,6])) // 5 
console.log(coinChangeWithMemoization(11, [1,2,5])) // 3
console.log(coinChangeWithMemoization(3, [2])) // -1 

