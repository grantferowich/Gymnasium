// COIN SUM

// Understanding
// Input: integer array and integer
// Output: integer
// Test case: [1,2,3], 4
// Expected output is 4
// Since there are four ways to sum the coins to reach 4

// Recursion
// Runtime O(N^(M+N))
// Space O(M+N)

// Runtime with memoization
// Runtime: O(M*N)
// Space complexity: O(M*N)

// using recursion on really, really large inputs can lead to max call limits being reached
// these are the situations where using a cache makes sense
// the cache uses more space than vanilla recursion
// the cache is faster than vanilla recursion, too


// Tools:

// 1. state variables
// 2. return variables
// 3. define and invoke helper method
// 4. base case(s)
// 5. recursive case(s)

// 1. instantiate cache
// 2. check if the key is in the cache at the start of the recursive call
// 3. write to cache at the end of a recursive call

// on optimization: writing faster algorithms generally entails using more space

const coinSum = (coinsInput, totalInput) => {
    // instantiate cache
    const cache = {};

    const findWays = (total, coins) => {
        // read cache to check if the current recursive problem has already been solved
        let key = total+ "_"+coins;
        if (key in cache){
            return cache[key];
        }

        if (total < 0){
            return 0;
        }
        if (coins.length === 0){
            // if total is greater than 0 when 
            // coins.length is 0 the path is invalid 
            if (total > 0){
                return 0;
            } 
        return 1;
        }
    let left = (total - coins[coins.length - 1], coins);
    let popped = coins.pop();
    let right = (total, coins);
    coins.push(popped);
    // write to cache
    cache[key] = left + right;
    return left + right;
    }


    return findWays(coinsInput, totalInput);
}
