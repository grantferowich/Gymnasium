/* 

Successfully tested the solution where every possible 
combination is checked.
The function was tested across two test cases 2/7/23.

*/

var twoSumII = function(numbers, target) {

    let x = 0;
    let y = 0;

    while (x < numbers.length){
        y = x +1 
        while (y < numbers.length){
            if (x !== y && numbers[x] + numbers[y]=== target){
                return [x+1,y+1]
            }
            y++
        }
        x++
    }
    
};

console.log(twoSumII([2,7,11,15], 9)) // [ 1, 2 ]
console.log(twoSumII([ 2, 3, 4 ], 6))  // [ 1 , 3 ]