/* 

REPEATED LOGICAL SHIFT
*/

const repeatedLogicalShift = (x , count) => {
    let z = 0;
    while (z < count){
        x >>>= 1 // aritmetic shift by 1 
        z++
    }
    return x
}

const data = repeatedLogicalShift(-932424444444, 800)
console.log('data', data) // data 0

/* The logical shift operator will push 0s into every bit slot in the 64-bit word. */