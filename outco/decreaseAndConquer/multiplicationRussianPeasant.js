/*
Successfully tested the function 1/10/23.

 * ## Multiplication Using Russian Peasant [Extra Credit]
 *
 * *Given two positive integers, return its product using Russian Peasant method of multiplication*
 *
 * Read up on how to apply the Russian Peasant method [here](https://en.wikipedia.org/wiki/Ancient_Egyptian_multiplication). It is also referred to as the Egyptian multiplication.
 *
 * **Parameters**
 * Input: a {Integer}
 * Input: b {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * Assume a <= b, and the value of a is N.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `487, 734 --> 357458`
 * `846, 908--> 768168`
 * 
 *  
 */


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

console.log(multiplicationRussianPeasant(487, 734)) // 357,458
console.log(multiplicationRussianPeasant(2, 23)) // 46
console.log(multiplicationRussianPeasant(8, 21)) 
console.log(multiplicationRussianPeasant(13, 238))