// Football permutations

// input: integer
// output: integer
// Constraints: Time complexity - 2^N
// Constraints: Space Complexity O(N)
// Edge: assume the input is always an integer
// Edge:  there will never be a case of a score that cannot   
    // be reached solely with 7s and 3s
// 0 and 100
//example footballPermutations(10) => 2
// 3, 7
// 7, 3

//   diagram
//      28 // 0th depth
// 1st depth and left: 21(-7)  1st and right: 25(-3)
//

// initialize an array of scores 
// check if the number is divisible by 6 with remainder of 0 
// 2 field goals comprise 6
// if the number modulo 6 is 1 then 

const footballPermutations = (number) => {
    let count = 0;
    const decrementScore = (score, depth) => {
      
      if (score === 0){
        count += 1;
        return;
      } 
      
      if (score < 0) {
        return; 
      }

      // left
      decrementScore(score-7, depth+1);
      // right 
      decrementScore(score-3, depth+1);
    }
    decrementScore(number, 0);
    return console.log(count);
}
  
footballPermutations(10) // 2
footballPermutations(13) // 3
footballPermutations(16) // 4
footballPermutations(21) // 2
footballPermutations("") // 0
  
  