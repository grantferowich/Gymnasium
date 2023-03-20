/* 
Triple Step

CTCI 8.01

Successfully tested the function 03/20/2023.

A child is running up a staircase with n steps and can hop either 1 step,
2 steps, or 3 steps at a time. Implement a method to count how many possible 
ways the child can run up the stairs.

Input: n, an integer
Output: an integer


Destination case: the child finished running up the stairs
Base case: the child ran up too many stairs.
Base case: the child has not run up any stairs.

Example cases 
n = 3

-1 , -2, -3 
                                 3
                   /              |              \
                 2                1              0 ✓ 
            /   |   \         /   |   \
           1    0 ✓  -1 x   0 ✓  -1 x  -2 x
        /  |  \ 
      0 ✓ -1 x -2 x 

      result = 4

*/

const tripleStep = (nInt = 0) => {
    if (nInt <= 0){
        return 0
    }
    let count = 0
    const climb = (numInt) => {
        if (numInt === nInt){
            count++
            return
        }
        if (numInt > nInt){
            return 
        }
        climb(numInt + 1)
        climb(numInt + 2)
        climb(numInt + 3)
    }

    climb(0)
    return count
}

/* TESTS */
const input0 = undefined;
const test0 = tripleStep(input0);
console.log('Test 0: ',test0 );
// expect 0

const input1 = null;
const test1 = tripleStep(input1);
console.log('Test 1: ', test1);
// expect 0

const input2 = 3;
const test2 = tripleStep(input2);
console.log('Test 2: ', test2)
// expect 4