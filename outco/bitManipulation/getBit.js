/* 
Get Bit

input: a binary number, x
output: true if the bit value at the xth index is 1
        false if the bit value at the xth index is 0

*/


//get bit returns whether or not the value at the xth index of the num is a 1 (true) or 0 (false)
const getBit = (num, x) => {
    let mask = 1 << x
    console.log(`Num is ${num} while mask is ${mask}`)    
    return ((num && mask) !== 0)
}

const data = getBit(0, 0) 
console.log('data 1:', data) 

// Num is 0 while mask is 1
// data 1: false

const data2 = getBit(1,1)
console.log('data 2:', data2) 

// Num is 1 while mask is 2
// data 2: true

const data3 = getBit(1,3)
console.log('data 3:', data3) 

// Num is 1 while mask is 8
// data 3: true

const data4 = getBit(16,0)
console.log('data 4:', data4) 
