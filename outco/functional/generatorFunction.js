/* 
Generator Function

A generator function may be paused and resumed during
execution.

*/

function* increment() {
    for (let x = 0; x < 3; x++){
        yield x
    }
}

const generator = increment()
console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().done); 