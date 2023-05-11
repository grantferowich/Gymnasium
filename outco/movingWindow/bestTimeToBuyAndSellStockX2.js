/**
 * 121
 * Easy
 * Best Time to Buy and Sell Stock
 * 
 * Attempted May 11, 2023.
 * Successfully tested the function May 11, 2023.
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 * 
 * input: prices = [7,1,5,3,6,4]
 * output: 5 
 * 
 * Buy at 1 and sell at 6.
 * init right and left pointers
 * compare the difference between right and left, 
 * the local difference,
 * with the ultimate difference
 *
 */

const buyAndSellStock = (prices = []) => {

    let leftPtrInt = 0;
    let rightPtrInt = prices.length - 1;
    let maxProfit = -Infinity;

    while (leftPtrInt < rightPtrInt){
        let differenceInt = prices[rightPtrInt] - prices[leftPtrInt];
        maxProfit = Math.max(maxProfit, differenceInt);
        if (prices[rightPtrInt] < prices[leftPtrInt]){
            rightPtrInt--;
        }
        differenceInt = prices[rightPtrInt] - prices[leftPtrInt];
        maxProfit = Math.max(maxProfit, differenceInt);
        if (prices[rightPtrInt] >= prices[leftPtrInt]){
            leftPtrInt++;
        }
        differenceInt = prices[rightPtrInt] - prices[leftPtrInt];
        maxProfit = Math.max(maxProfit, differenceInt);
    }

    return maxProfit;

}

/* Tests */

const arr1 = [7,1,5,3,6,4];
const arr2 = [1,2,1,3,1];
const arr3 = [1];
const arr4 = [];
const arr5 = [9,2,9,1,12];

const result1Int = buyAndSellStock(arr1);
const result2Int = buyAndSellStock(arr2);
const result3Int = buyAndSellStock(arr3);
const result4Int = buyAndSellStock(arr4);
const result5Int = buyAndSellStock(arr5);

console.log(`Result 1: ${result1Int}`);
console.log(`Result 2: ${result2Int}`);
console.log(`Result 3: ${result3Int}`);
console.log(`Result 4: ${result4Int}`);
console.log(`Result 5: ${result5Int}`);

/* Test results

Result 1: 6
Result 2: 2
Result 3: -Infinity
Result 4: -Infinity
Result 5: 11

*/