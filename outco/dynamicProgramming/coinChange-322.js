const { red } = require("colors")

/* 
322. Coin Change 

Medium 

You are given an integer array coins representing
coins of different denominations and an integer 
amount representing a total amount of money.

Return the fewest number of coins that you need 
to make up that amount. If that amount of money 
cannot be made up by any combination of the coins, 
return -1.

You may assume that you have an infinite number 
of each kind of coin.


Always find the least number of coins
always check to put largest coin in first, or something

Example 1: 
coinsArr = [1,2,5]
amountInt = 11
output: 3
why? 11 = 5 + 5 + 1 

Example 2:
coinsArr = [1, 5, 10]
amountInt = 16
output = 3
why? 16 = 10 + 5 + 1

Example 3:
coinsArr = [1, 5, 10, 25]
amountInt = 30 
output: 2
why? 30 = 25 + 5 

                amountInt, coinsArr
                 30, [ 1, 5, 10, 25]
                 /                   \ 
             30 - 25  steps++  --> use 25 as coin
             /      \ 
           5 - 5     steps+++  --> use 5 as coin 

totalSteps = 2
return 2

if the largest coin is smaller than the amountInt, then subtract 
the largest coin from the amount

if the largest coin is greater than the amountInt
then find a smaller coin 
keep searching for a smaller coin until the coin amount 
is equal or less than the amountInt

recursive case: 
    case 1: subtract the largest coin from amountInt 
    case 2: subtract a coin from amountInt which is less than or equal to amountInt

destination case: you reached 0 by subtracting coins from amountInt

out of bounds: you reached a negative number

we want to keep track of the lowest number of coins to reach 0
so, we will keep track of the number of "steps" required to reach 0

if a path has a smaller number of steps, then update the steps

*/
const coinChange = (coinsArr, amountInt) => {

    coinsArr.sort((a,b) => a - b)

    // let steps = 0;
    const reduce = (coinsArr, targetInt, steps, depth) => {
        if (targetInt === 0){
            return steps
        }
        // oob
        if (depth < 0){
            return
        }

        // oob
        if (targetInt < -1){
            return
        }

        if (coinsArr[depth] <= targetInt){
            targetInt -= coinsArr[depth]
            steps += 1
            return reduce(coinsArr, targetInt, steps, depth)
        } else {
            return reduce(coinsArr, targetInt, steps, depth - 1)
        }
    }

    let result = reduce(coinsArr, amountInt, 0, coinsArr.length - 1)
    return result !== undefined ? result : -1
}

/* TESTS */

const arr1 = [1, 5, 10, 25];
const amount1 = 30;
const result1 = coinChange(arr1, amount1);
console.log(`Result 1: ${result1}.`);
// expect Result 1: 2. 

const arr2 = [1, 5, 10]
const amount2 = 16
const result2 = coinChange(arr2, amount2)
console.log(`Result 2: ${result2}.`);
// expect 3

const arr3 = [1, 2, 5]
const amount3 = 11
const result3 = coinChange(arr3, amount3)
console.log(`Result 3: ${result3}.`);
// expect 3

const arr4 = [ 2 ]
const amount4 = 3
const result4 = coinChange(arr4, amount4)
console.log(`Result 4: ${result4}.`);

const arr5 = [1]
const amount5 = 0
const result5 = coinChange(arr5, amount5)
console.log(`Result 5: ${result5}`)
/* TEST RESULTS */