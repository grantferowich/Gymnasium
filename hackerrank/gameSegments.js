
// A video game developer is developing a game in which the character makes their way through several segments of a level. 
// In each segment, if the character collects a coin the player scores 1 point.
// However, if the segment does not have a coin 1 point is deducted from the total score.
//Player 1 always begins the level and, at some point, the game play is turned over to Player 2 to complete the level. 
// Player1's goal is to achieve heigher score than Player 2 once the level is completed. Given the segment status(whether they contain the coin or not), find the minimum number of segments Player1 should play so that, in the end Player1's score is greater than Player2.

// Example: [1,1,0,1]
// Player 1 has the following option:

// Play 0 segment- Player1's score 0 and Player2's score ->3-1=2(3 points for segments with coin and -1 for no coin segment)
// Play 1 segment- Player1's score 1 and Player2's score -> 2-1=1
// Play 2 segment- Player1's score 2 and Player2's score -> 1-1=0
// So the answer is 2.

// input: array
// output: an integer
// constraints: no time constraints. no space constrains. 
// edge: 


function playSegments(coins) {
 // loop through the array to sum all the elements

 // p2's score is total - p1's score
 // return the index when p2 > p1
 //init storage 1
 let sum = 0;
 
 for (let i = 0; i<coins.length; i++){
    if (coins[i] > 0) {
        sum += coins[i] 
    } else {
        sum -= 1;
    }
 }
 // init storage 2
 let p1Score = 0
 

 // loop through the array to increment p1's score
 for (let k = 0; k < coins.length; k++){
    if (coins[k] > 0){
        p1Score += coins[k];  
    } 
    let p2Score = sum - p1Score;
    if (p1Score>p2Score){ return console.log('k',k + 1) }

 }
 
}
playSegments([1,1,0,1]) // => 2