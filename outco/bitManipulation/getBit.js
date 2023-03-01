/* 
Get Bit


*/


const getBit = (num, x) => {
    return ((num && (1 << x)) !== 0)
}

let data = getBit(00010000, 5) // 1
// console.log('data', data)

let data2 = getBit(00010000, 1) // 0
// console.log('data', data2)


// let num = 00010000
// let x = 0
console.log(00000000 << 1) // 0
console.log(1 << 1) // 2
console.log(00000100 << 1) // 16

