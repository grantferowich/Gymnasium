// MiniMaxSum.js
// Given an array of 5 integers
// return the minimum sum of exactly 4 integers
// return the maximum sum of exactly 4 integers
/*

input: [1,3,5,7,9]
output: 16 24

input: [7, 69, 2, 221, 8974]
output: 299 9271
*/
// inputs: Array of integers
// output: Two integers
// constraints: 

// loop through all combinations
// while there are exactly four elements in the sub-combination
// take the tempSum the elements
// if the tempSum is less the initial minSum, update min
// if the tempSum is greater than maxSum, update max
// let minSum initially be infinity
// let maxSum initially be 0


const arrSum = (arr) => {
    let result = 0
    for (let i = 0; i < arr.length; i++){
        result += arr[i]
    }
    return result
}

function miniMaxSum(arr) {
    let minSum = Infinity;
    let maxSum = 0;
    let n = arr.length;
    arr.sort()
    
    
    for (let i = 0; i < n; i++){
        let tempArr = [arr[i]]
        for (let x = i; x < n; x++){
            if (tempArr.length < 5 && (i !== x)){
                tempArr.push(arr[x])
            } 
            if (tempArr.length == 4){
                let tempSum = arrSum(tempArr);
                if (tempSum < minSum){
                    minSum = tempSum
                }
                if (tempSum > maxSum){
                    maxSum = tempSum
                }
            }
        }
    }
        
    console.log(`${minSum} ${maxSum}`)
}