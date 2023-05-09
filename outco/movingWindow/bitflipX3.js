/*
 *  BitFlip
 *
 *  Given an array of binary values (0 and 1) and N number of flips that
 *  can convert a 0 to a 1, determine the maximum number of consecutive 1's
 *  that can be made.
 *
 *  Input: arr {Array}
 *  Input: n {Integer}
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7
 * 
 *  Input 2 
 *  arr = [1,1,0,1,1]
 *  kInt = 1 
 *  Output = 5
 * 
 * while there are fewer than n flips, expand
 * initialize right ptr and left ptr
 * 
 */

const bitflip = (arr, kInt) => {
    let rightPtrInt = 0;
    let leftPtrInt = 0;
    let maxLengthInt = 0;
    let togglesInt = 0;

    while (rightPtrInt < arr.length){

        if (arr[rightPtrInt] === 0) { togglesInt++}

        if (togglesInt > kInt) { 
            if (arr[leftPtrInt] === 0){
                togglesInt--
            }
            leftPtrInt++
        }

        maxLengthInt = (maxLengthInt, rightPtrInt - leftPtrInt)
        rightPtrInt++ 
    }
    return maxLengthInt

}

/* Tests */

/* Test results */