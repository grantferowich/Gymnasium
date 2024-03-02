
/* 

Successfully tested the solution 2/8/23. 
The solution uses two pointers at the start and end of the sorted array.
The solution checks whether the sum of the elements equals the target value.
If the sum is less than the target value the start index increments. 
If the sum is greater than the target the end index decrements. 

Complexity analysis
The solution has a time complexity of O(N) and a space complexity of O(1).


start a pointer at the middle index 
check if the target input less the  number at the middle index
equals a number in the array
if the number exists return out



console.log(twoSumII([2,7,11,15], 9)) // [ 1, 2 ]

console.log(twoSumII([ 5, 25, 75], 100)) // [2,3]

*/

var twoSumII = (numbers, target) => {

    let s = 0;
    let e = numbers.length -1;

    while (s < e){
        let sum = numbers[s] + numbers[e];
        if (sum === target){
            return [ s + 1, e + 1 ];
        }
        if (sum < target) {
            s++;
        }
        if (sum > target){
            e--;
        }
    }
    return [];
};

console.log(twoSumII([ 2, 7, 11, 15], 9)) // [ 1, 2 ]
console.log(twoSumII([ 2, 3, 4 ], 6))  // [ 1 , 3 ]
console.log(twoSumII([ 5, 25, 75], 100)) // [ 2, 3 ]