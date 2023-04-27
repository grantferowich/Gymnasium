/* 
Euclid's Algorithm


// Given A and B take the difference of A and B to find the greatest common divisor.
// To find the GCD of 78 and 52 

// (A , B)
// (78, 52 ) 78 - 52 = 26
// (52, 26) 52 -26 = 26
// (26, 26) 26-26 = 0
// (26, 0)  ==> // return console.log(26)
// Euclid's algorithm states the GCD of (A, 0) will always be A. 

// if a is not larger than b
// swap A and B
// steps
// subtract b from a, store as differenceInt
// process A less differenceInt
// process B less differenceInt
// if B less differenceInt is 0
// return A
// since the GCD of (A, 0) will always be A

// Complexity Analysis
// Time Complexity: O(logN)
// Space Complexity: O(1)
*/

const euclidsAlgorithm = (int1, int2) => {

    if (int2 > int1){
        let tempInt1 = int1;
        let tempInt2 = int2;
        int1 = tempInt2;
        int2 = tempInt1;
    }

    const process = (aInt1, bInt2) => {
        // destination
        if (bInt2 === 0){
            return aInt1
        }
        let differenceInt = aInt1 - bInt2
        aInt1 = aInt1 - differenceInt
        bInt2 = bInt2 - differenceInt
        return process(aInt1, bInt2)

    }

    return process(int1, int2)
}

/* TESTS */

const int1 = 78
const int2 = 52

const result1Int = euclidsAlgorithm(int1, int2)

console.log(`Result 1: ${result1Int}`)