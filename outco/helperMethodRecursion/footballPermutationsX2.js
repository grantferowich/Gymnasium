/* 
Football Permutations

Attempted on May 03, 2023. 

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

    let waysInt = 0
    const reduce = (sInt) => {

        if (sInt === 0){
            waysInt++;
            return;
        }

        if (sInt < 0){
            return;
        }

        reduce(sInt - 7)
        reduce(sInt - 3)


    }

    reduce(scoreInt)
    return waysInt
}

const score1Int = 10
const score2Int = 14 
const score3Int = 17
const score4Int = 21
const score5Int = 24

const result1Int = footballPermutations(score1Int)
const result2Int = footballPermutations(score2Int)
const result3Int = footballPermutations(score3Int)
const result4Int = footballPermutations(score4Int)
const result5Int = footballPermutations(score5Int)

console.log(`Result 1: ${result1Int}`)
console.log(`Result 2: ${result2Int}`)
console.log(`Result 3: ${result3Int}`)
console.log(`Result 4: ${result4Int}`)
console.log(`Result 5: ${result5Int}`)

