/* 
Generator Function

Successfully tested the function 3/12/23.

A generator function may be paused and resumed during
execution.

*/

function* increment() {
    for (let x = 0; x < 3; x++){
        yield x
    }
}

/* TESTS */

const generator = increment()
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().done); // true