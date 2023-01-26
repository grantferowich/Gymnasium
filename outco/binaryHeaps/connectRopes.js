/**
Connect N Ropes with Minimum Cost

Given n ropes of different lengths represented by an array of integers, connect them all into a single rope in a way that minimizes the cost of connecting them.

The cost of connecting two ropes is equal to sum of their lengths. We want to minimize the cost of connecting all the ropes.

Input: ropes, [Integer]
Output: Integer
Example
In: [4, 3, 2, 6]
Out: 29


Explanation:

First we connect 3 + 2 = 5, giving the following ropes: [4,5,6]
Then we connect 5 + 4 = 9, giving the following ropes: [9,6]
Then we connect 9 + 6 = 15, giving the final combination of all ropes: [15]

So in total the cost for the most efficient approach is: 5 + 9 + 15 = 29

A less efficient way would be:

First we connect 4 + 6 = 10, giving the following ropes: [10,3,2]
Then we connect 10 + 3 = 13, giving the following ropes: [13,2]
Then we connect 13 + 2 = 15, giving the final combination of all ropes: [15]

So in total the cost for the less efficient approach is: 10 + 13 + 15 = 38

Although in both cases we need to make the same number of connections, the costs are different


Input: [2, 3, 10, 11]


2 + 3 = 5, [5, 10, 11]
5 + 10 = 15, [11, 15]
11 + 15 = 26,
---------------
46

2+3=5, [5, 10, 11]
10+11=21, [5, 21]
5+21=26, [26]

---------------
52


Output: 2+3 = 5
5+10 = 15
11 + 15 = 26
26 + 15 + 5 = 46 

sum = 5
resultArray = [5, 15, 26]
subresult = 15

[11]

-------------------------

heap = {4, 6, 5, }
heap = {6, 9}
sum = 0
a = 4
b = 5
subsum = 9 
-------------------------

store subresults in a heap 
add the subresult to heap in O(log(N)) runtime 

Pseudocode:

result.push(subresult)

Intermediate:
Time Complexity: O(N log N)
Auxiliary Space Complexity: O(N)

Advanced:
Time Complexity: O(N log N)
Auxiliary Space Complexity: O(1)

N = # of Ropes

Assume you have an existing heap implementation with the following methods:

Heap:
  * add()     O(log(N))
  * remove()  O(log(N))
  * heapify() O(N)
  *

input: [4,3,2,6]
*/
const connectRopes = (arr) => {
  let output = [];
  arr.sort();
  for (let x = 0; x < arr.length; x++){
    let ele1 = arr[x]
    let ele2 = arr[x+1]
    output.push(ele1+ele2);
    arr.pop()
  }
  

}

console.log(connectRopes([4,3,2,6]))
