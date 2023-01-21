/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words = 'The function coinChangeWithMemoization takes in two parameters, coins and target. It first creates a cache object. It then defines a nested function findWays which takes in two parameters, total and coins. The findWays function creates a key by concatenating the string representations of total and coins. It then checks the cache for the key, and if it exists, returns its value. If the key does not exist in the cache, the function proceeds with several checks. If total is equal to 0 and the length of coins is 0, the function returns 1. If total is less than 0, it returns 0. If the length of coins is 0, it returns 0. The function then performs two recursive cases, first subtracting the last coin from total and traversing left, and then popping a coin from the coins array and traversing right. The function returns the sum of these two recursive calls and stores it in the cache with the previously created key. The coinChangeWithMemoization function then returns the result of calling the findWays function with the coins and target parameters.'

const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim()
    return text;
}

console.log(cleanText(words));