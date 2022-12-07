// Since the 1940s dynamic programming has been a term meant to impress.

// Dynamic programming is a tool for solving problems. 
// Objectives: 
// Introduction to Dynamic Programming
// Relationship to Recursion
// Recognition:     
//    => Recursive Solution
//    => Repetitive Conditions
// Tools: 
//    => Recursive tree
//    => Binary decision
//    => Cache (memoization)
//    => Convert to table (tabulation)

// Coin Sum 
// Given an array of coins and a target total, return how many unique ways there 
// are to use the coins to make up that total


// Input: [1,2,3] 4
// Output: 4
// Possible: 1+1+1+1; 1+3; 1+1+2; 2+2;

//
// coins: [1,2,4] target: 5
// Memoization
// Coins -- total
// Going to use a recursive tree
// How to build a recursive tree? First there must be a root node! 
// Could start at 0 or at 5
// Which would be better? 
// 5. Start with inputs and aim to arrive at the same base case (0).
//
/* 
            Coin Change [Recursive tree]
                    5           -- can subtract 1, 2, or 4
                /   |   \
               4    3    1   
              /\ \      /| \
             3 2 0     0 -1 -3

// performing a binary decision is the crux of dynamic programming
// Simplify the arguments: total (integer) and coins [array]
// total will be added to or subtracted from or divided by
// coins will break down into a subarray; elements will pop off the front or end of the array

                            total, coins
                            5, [1,2,4]
                          /             \       
subtract first coin  4,[1,2,4] .       5,[2,4]     remove (shifted) first coin

/ simplified arguments 
this approach falls out of favor because shifting
the element from the array means 2,4, must shift indices, which is O(N) time


                            total, coins
                            5, [1,2,4]
                          /             \       
subtract last coin  1,[1,2,4] .       5,[1,2]     pop last coin  

// dynamic programming is about using the inputs, 
or a smaller version of the inputs, to solve a problem with the larger version of the inputs
There's only so many ways we can simplify data.
Int: subtract or divide
Array: shift or pop
String: immutable, so must make copy, but you could pop from an array of chars










*/



const coinSum = (coins, total) => {

}
