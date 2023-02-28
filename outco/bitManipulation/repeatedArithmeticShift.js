/* 
REPEATED ARITHMETIC SHIFT
Successfully tested the function 2/28/23.
*/

const repeatedArithmeticShift = (x , count) => {
    let z = 0;
    while (z < count){
        x >>= 1 // aritmetic shift by 1 
        z++
    }
    return x
}

const data = repeatedArithmeticShift(-932424444444, 800)
console.log('data', data) // data -1

/* The arithmetic shift carries the signed 1 over every bit slot in the 64-bit word. */