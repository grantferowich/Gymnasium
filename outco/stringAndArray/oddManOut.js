/* 
ODD MAN OUT

Successfully tested the function 2/27/23.

Complexity Analysis:
Time complexity: O(N)
Space complexity: O(1)

You're given an unsorted array of integers where every integer appears exactly
twice,except for one integer which appears only once. Write an algorithm (in a
language of your choice) that finds the integer that appears only once.

input: [1,1,2,2,3,3,4,4,5]
output: 5

*/


const oddManOut = (array) => {
    let frequency = new Map()
    let x = 0;
    while (x < array.length){
        let num = array[x]
        if (frequency.has(num)){
            let numFrequency = frequency.get(num) + 1
            frequency.set(num, numFrequency)
        }
        if (!frequency.has(num)){
            frequency.set(num,1)
        }
        x++
    }

    for (let [key, val] of frequency){
        if (val === 1){
            return key
        }
    }
}

const input = [1,1,2,2,3,3,4,4,5]
const result = oddManOut(input)
console.log('result', result)
