/* 
Get Bit

Successfully tested the function 3/1/23.
Get Bit returns whether or not the value at the xth index of the num is a 1 (true) or 0 (false)

input: a binary number, x
output: true if the bit value at the xth index is 1
        false if the bit value at the xth index is 0

*/

const decimalToBinary = (decimal) => {
    let binaryStr = (decimal >>> 0).toString(2)
    while (binaryStr.length < 64){
        binaryStr = '0' + binaryStr
    }
    return binaryStr
}

const getBit = (num, x) => {
    let mask = 1 << x
    console.log(`Num is ${decimalToBinary(num)} while mask is ${decimalToBinary(mask)}`)    
    return (parseInt(num,2) & parseInt(mask,2)) !== 0
}

const data = getBit(0, 0) 
console.log('data 1:', data) 

// Num is 0000000000000000000000000000000000000000000000000000000000000000 
// while mask is 0000000000000000000000000000000000000000000000000000000000000001
// data 1: false

const data2 = getBit(1,4)
console.log('data 2:', data2) 

// Num is 0000000000000000000000000000000000000000000000000000000000000001 
//while mask is 0000000000000000000000000000000000000000000000000000000000010000
// data 2: false

const data3 = getBit(8,3)
console.log('data 3:', data3) 

// Num is 0000000000000000000000000000000000000000000000000000000000000001 
// while mask is 0000000000000000000000000000000000000000000000000000000000001000
// data 3: false

const data4 = getBit(16,1)
console.log('data 4:', data4) 

// Num is 0000000000000000000000000000000000000000000000000000000000010000 
// while mask is 0000000000000000000000000000000000000000000000000000000000000001
// data 4: false

const data5 = getBit(16,4)
console.log('data 5:', data5) 

// Num is 0000000000000000000000000000000000000000000000000000000000010000 
// while mask is 0000000000000000000000000000000000000000000000000000000000010000
// data 5: true