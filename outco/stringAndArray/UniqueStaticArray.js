/* 
Unique Static Array

* Utilize the frequency count pattern to solve these problems.  Use a Hash Set
* or an Array instead of a Hash Table where applicable.
*
* Unique
*
* Given an array of integers, return an array with all duplicates removed.*
*
* Parameters
* Input: arr {Array of Integers}
* Output: {Array of Integers}
*
* Constraints:
*
* Time: O(N)
* Space: O(N)
*
* Examples
* [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
* [1, 1, 2, 2, 3, 3] --> [1, 2, 3]
* [1, 2, 3, 1, 2] --> [1, 2, 3]

// loop over elements
// if the index of the element is -1 
// do nothing
// if the index of the element is greater than -1 
// evict the element

// O(1) aux space
// O(N) run time
// checking the index of a value is O(1) --> wrong! Checking the index is O(N).

// let arr = [1,2,3]
arr[0] returning 1 is O(1) (access)

steps

find largest number in array, yInt
init a fixed size array of yInt length, called fixedArr 
loop over the array with xInt
set fixedArr[xInt] = 1 
now to check if the element at xInt appeared twice, 
simply check if fixedArr[xInt] === 1
if the element at xInt is 1, do nothing
--> want to return array of base 10 integers
loop over the fixedArr again with xInt
if fixedArr[xInt] === 1, push xInt to outputArr
return outputArr

*/
