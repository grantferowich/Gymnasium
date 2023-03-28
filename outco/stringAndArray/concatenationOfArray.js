/* 
Concatenation of Array

Successfully tested the function 03/28/23
https://leetcode.com/problems/concatenation-of-array/submissions/923604136/


*/


const getConcatenation = function(nums) {
    let numsCopyArr = [...nums]
    return nums.concat(numsCopyArr)
};

/* TESTS */
const inputArr = [[1,2,1], [1,3,2,1]]

const runTests = (array) => {
    // generate date on which tests were run
    const todayDate = new Date()
    const dayInt = todayDate.getDate()
    const monthInt = todayDate.getMonth() + 1
    const yearInt = todayDate.getFullYear()

    let xInt = 0
    while (xInt < inputArr.length){
        let testIntputInt = inputArr[xInt]
        let resultInt = getConcatenation(testIntputInt)
        console.log(`Test ${xInt}: ${resultInt}`)
        xInt++
    }
    console.log(`✓ Successfully tested the function ${monthInt}/${dayInt}/${yearInt}`);
}

runTests(inputArr) // 

/* TEST RESULTS 

Test 0: 1,2,1,1,2,1
Test 1: 1,3,2,1,1,3,2,1

*/

