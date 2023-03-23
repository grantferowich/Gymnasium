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