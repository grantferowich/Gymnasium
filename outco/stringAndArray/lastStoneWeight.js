/* 
1046. Last Stone Weight

Started engineering on July 5, 2023 at 7:55pm.
Easy
5.4K
93
Companies
You are given an array of integers stones
 where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each 
turn, we choose the heaviest two stones and smash them 
together. Suppose the heaviest two stones have weights 
x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. 
If there are no stones left, return 0.

Example 1:
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
Example 2:

Input: stones = [1]
Output: 1


The first thing I will do is sort the array in O(nlogn) time.
Now I at least have the largest numbers at the front of the array.

*/

const lastStoneWeight = (arr) => {

    let sortedArr = arr.sort((a, b) => b - a)
    console.log('sortedArr', sortedArr)

}

/* Test */

const arr1 = [2,7,4,1,8,1];
const result1Int = lastStoneWeight(arr1)

/* Test results */