// Recursion Steps
// State variables
// return variables
// define and invoke helper method
// base case(s)
// recursive case(s)
//NonConsecutiveOnes.js

// given a number, n, return the number of bit strings
// of n length that DO NOT contain consecutive 1's
        //  (build, depth)
//               ""          [0]
//            /      \
// .         0        1       [1]
//          / \      / \       
//         00 01    10 11      [2]


// initialize state variables: array of strings
// return state variables: qrray of strings
// define and invoke recursive helper method
// base case(s)
// recursive case(s)

// base case: ("", 0)

// recursive case: 
// left 
// build + "0"

// right
// build + "1" 

// increment count if the build does not include "11"

// Input: 2
// Output: ["00", "01", "10"]

// Input: 3
// Output: ["000", "001", "010", "100", "101"]

const nonConsecutiveOnes = (number) => {
    if (typeof number !== "number"){
        return []
    }

    let result = [];
    const findCombinations = (build, depth) => {
        // terminate recursion
        if (depth > number){
            return 
        }
        if (!build.includes("11")){
            if (build.length === number){
                result.push(build)
            }           
        }   
        //right
        findCombinations(build + "1", depth + 1);
        //left
        findCombinations(build + "0", depth + 1);
    }
    
    findCombinations("", 0);
    return result;
}

console.log(nonConsecutiveOnes(2)) // ["00", "01", "10"]
console.log(nonConsecutiveOnes(3)) // ["000", "001", "010", "100", "101"]
console.log(nonConsecutiveOnes("")) // []




