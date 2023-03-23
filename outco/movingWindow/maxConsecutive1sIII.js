/*  
Max Consecutive Ones III

Given a binary array nums and an integer k, return
the maximum number of consecutive 1s in the array if you
can flip at most k 0s.


example 1:
numsArr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], kInt = 2
Output: 6

kInt is like the "budget"
expand while k is above or equal to 0
contract while k is negative

*/

const maxConsecutiveOnesIII = (numsArr, kInt) => {

    let rPtrInt = 0;
    let lPtrInt = 0;

    let rResultInt = 0;
    let lResultInt = 0;

    while (rPtrInt < numsArr.length){

        if (numsArr[rPtrInt] === 0){
            kInt--
        }

        if (kInt < 0){
            if (rPtrInt - lPtrInt > rResultInt - lResultInt){
                rResultInt = rPtrInt;
                lResultInt = lPtrInt;
            }
            if (numsArr[lPtrInt] === 0){
                kInt++
            }
            lPtrInt++
        }


        rPtrInt++
    }
    return rResultInt - lResultInt
}

/* TESTS */
const numsArr1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
const kInt1 = 2
console.log(maxConsecutiveOnesIII(numsArr1,kInt1))

Output: 6