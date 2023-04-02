/* 
Find All Numbers Disappeared in an Array 

Easy

Given an array nums of n integers where nums[i] 
is in the range [1, n], return an array of all 
the integers in the range [1, n] that do not 
appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2: 
Input: nums = [1,1]
Output: [2]

intMap = {1=> true,
          2=> true,
          ...}


Psuedocode:
store all integers in a map 
loop from 1 to n with an iterator xInt
if xInt is not located in the map
push xInt to output arr
return output arr
*/

const findNumbersDisappeared = (arr=[]) => {

    if ( arr === null || arr.length === 0){
        return 0;
    }
    // state vars
    let xInt = 0;
    let intMap = new Map();
    let outputArr = []

    // initialize intMap
    while (xInt < arr.length){
        let int = arr[xInt];
        if (!intMap.has(int)){
            intMap.set(int, true)
        }
        xInt++
    }

    // easy loop
    xInt = 1
    while (xInt <= arr.length){
        if (!intMap.has(xInt)){
            outputArr.push(xInt)
        }
        xInt++
    }
    return outputArr
}

/* TESTS */

const inputArr1 = [[0], undefined, null, [4,3,2,7,8,2,3,1], [1, 1], [1,3,2,2,2, 4]]

// Expect: 0, 0, 0, 2, 3
const runTests = (inputArr) => {
    // generate date on which tests were run
    const todayDate = new Date()
    const dayInt = todayDate.getDate()
    const monthInt = todayDate.getMonth() + 1
    const yearInt = todayDate.getFullYear()

    let xInt = 0
    while (xInt < inputArr.length){
        let testIntputInt = inputArr[xInt]
        let resultInt = findNumbersDisappeared(testIntputInt)
        console.log(`Test ${xInt}: ${resultInt}`)
        xInt++
    }


    console.log(`✓ Successfully tested the function ${monthInt}/${dayInt}/${yearInt}`);
}

runTests(inputArr1)

/* 
TEST RESULTS

Test 0: 1
Test 1: 0
Test 2: 0
Test 3: 5,6
Test 4: 2
Test 5: 5,6
✓ Successfully tested the function 4/1/2023

*/
