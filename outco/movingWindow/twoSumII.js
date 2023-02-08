
/* 

Successfully tested the solution where every possible 
combination is checked.
The function was tested across two test cases 2/7/23.


// start a pointer at the middle index 
// check if the target input less the  number at the middle index
// equals a number in the array
// if the number exists return out
// if the 


console.log(twoSumII([2,7,11,15], 9)) // [ 1, 2 ]

s = 0 
m = 1
v = 7
r = target - v = 2
e = 1
indexOf(r) = 0
indexOf(7) = 2



*/

var twoSumII = (numbers, target) => {

    let s = 0;
    let e = numbers.length -1;

    while (s < e){
        
        let m = parseInt((s - Math.max((e - s)/2)));
        let v = numbers[m];
        let r = target - v;
        if (numbers.indexOf(r) > -1){
            return [numbers.indexOf(v)+1, numbers.lastIndexOf(r)+1]
        }
        if (r < v){
            // look left
            e = m - 1;
            s++
        } else {
            // look right
            s = m + 1;
            e--;
        }
    }
    return []

};

// console.log(twoSumII([ 2, 7, 11, 15], 9)) // [ 1, 2 ]
// console.log(twoSumII([ 2, 3, 4 ], 6))  // [ 1 , 3 ]
console.log(twoSumII([ 5, 25, 75], 100)) // [2,3]