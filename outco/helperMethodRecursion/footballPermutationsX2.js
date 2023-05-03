/* 

Football Permutations

Attempted on May 03, 2023. 
Successfully tested the function May 03, 2023.

input: integer
output: integer

Constraints: Time complexity - 2^N
Constraints: Space Complexity O(N)
Edge: assume the input is always an integer
Edge: there will never be a case of a score that cannot   
    // be reached solely with 7s and 3s
// 0 and 100
//example footballPermutations(10) => 2
// 3, 7
// 7, 3

  Diagram
      28 // 0th depth
 1st depth and left: 21(-7)  1st and right: 25(-3)


 recursive calls: subtract 7 (1), subtract 3 (2)
 base case: inputInt is 0

*/

const footballPermutations = (scoreInt) => {
    if (isNaN(scoreInt) || scoreInt === null){
        return 'Invalid input.'
    }
    let waysInt = 0;

    const reduce = (sInt) => {
        // destination case
        if (sInt === 0){
            waysInt++;
            return;
        }

        // oob
        if (sInt < 0){
            return;
        }

        // recursive calls
        reduce(sInt - 7);
        reduce(sInt - 3);
    }

    reduce(scoreInt)
    return waysInt;
}

const score1Int = 10
const score2Int = 14 
const score3Int = 17
const score4Int = 21
const score5Int = 24
const score6Int = undefined
const score7Int = null

const result1Int = footballPermutations(score1Int)
const result2Int = footballPermutations(score2Int)
const result3Int = footballPermutations(score3Int)
const result4Int = footballPermutations(score4Int)
const result5Int = footballPermutations(score5Int)
const result6Int = footballPermutations(score6Int)
const result7Int = footballPermutations(score7Int)

console.log(`Result 1: ${result1Int}`)
console.log(`Result 2: ${result2Int}`)
console.log(`Result 3: ${result3Int}`)
console.log(`Result 4: ${result4Int}`)
console.log(`Result 5: ${result5Int}`)
console.log(`Result 6: ${result6Int}`)
console.log(`Result 7: ${result7Int}`)