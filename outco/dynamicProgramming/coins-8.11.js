/* 
Coins

CTCI 8.11

Successfully tested the function 03/23/2023.

Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and
pennies (1 cent), write code to calculate the number of ways of representing n cents.

Example: 
Input: 5
Output: 2

Rationale:
1: a nickle
2: five pennies
*/

const coins = (nInt = 0) => {
    if (nInt === 0){
        return 0
    }
    let waysInt = 0
    let cache = {}
    const buildUp = (runningSumInt) => {
        let key = runningSumInt.toString
        if (cache[key]){
            return cache[key];
        }
        // destination  
        if (runningSumInt === nInt){
            waysInt++
            return
        }
       
        // oob
        if (runningSumInt > nInt){
            return 
        }

        let penny = buildUp(runningSumInt+1)
        let nickel = buildUp(runningSumInt+5)
        let dime = buildUp(runningSumInt+10)
        let quarter = buildUp(runningSumInt+25)
        return cache[key] = penny + nickel + dime +quarter
    }   

    buildUp(0);
    return waysInt;
}

/* TESTS */

const inputArr1 = [0, undefined, null, 5, 10, 13, 25, 50]

// Expect: 0, 0, 0, 2, 3
const runTests = (inputArr) => {
    let xInt = 0
    while (xInt < inputArr.length){
        let testIntputInt = inputArr[xInt]
        let resultInt = coins(testIntputInt)
        console.log(`Test ${xInt}: ${resultInt}`)
        xInt++
    }
}

runTests(inputArr1)

/* TEST RESULTS

Test 0: 0
Test 1: 0
Test 2: 0
Test 3: 2
Test 4: 9
Test 5: 24
Test 6: 916
Test 7: 1931845 
*/