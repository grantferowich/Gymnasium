const shiftX = (num, x) =>{
    return num <<= x
}

let result = shiftX(1,1)
console.log('result', result)

let result2 = shiftX(1,2)
console.log('result2', result2)