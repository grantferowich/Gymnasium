function  multiplicationRussianPeasant(a, b) {
    while ( a > 0 ){
      a = a % 2
      b = b * 2
    }
    return b
}
// let x = 2 % 2;
// console.log(x)
// console.log(2 mod 2)

// console.log(multiplicationRussianPeasant(487, 734)) // 357,458
console.log(multiplicationRussianPeasant(2, 23)) // 46