// Max consecutive sum

// Given an array of integers find the sum of consecutive values
// in the array that produces the maximum value.

// Input: array
// Output: number

// Input = [6, -1, 3, 5, -10]
// output = 13

//Succesfully tested the solution 12/13/22. 

const maxConsecutiveSum = (array) => {
    let local = 0;
    let ultimate = 0;
    for (let x = 0; x < array.length; x++){
        local = Math.max(local + array[x], array[x]);
        ultimate = Math.max(local, ultimate)
    }

    return ultimate;
}

console.log(maxConsecutiveSum([6, -1, 3, 5, -10]))


