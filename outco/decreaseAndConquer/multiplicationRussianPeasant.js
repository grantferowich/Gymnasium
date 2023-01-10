const  multiplicationRussianPeasant = (a, b) => {
    let accumulator = 0;
    while ( a > 0 ){
        if (a % 2 === 1){
            accumulator += b
        }
      a = parseInt(a / 2)
      b = b * 2;
    }
    return accumulator
}
// let x = 2 % 2;
// console.log(x)
// console.log(2 mod 2)

console.log(multiplicationRussianPeasant(487, 734)) // 357,458
console.log(multiplicationRussianPeasant(2, 23)) // 46
console.log(multiplicationRussianPeasant(8, 21)) 