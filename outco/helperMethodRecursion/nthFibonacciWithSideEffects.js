// NTH FIBONACCI

// implementation of the nth fibonacci function with single recursion 
// and a bottom-up approach

// Successfully tested the recursive solution with side effects on 12/10/22.
const nthFibonacciWithSideEffects = (number, i, fibonacci) => {
    fibonacci = fibonacci || [0,1]
    i = i || 2;
    if ( number < 2){ return fibonacci[number];}
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    if ( i === number ){ return fibonacci[i]}

    return nthFibonacciWithSideEffects(number, i+1, fibonacci)
}

console.log(nthFibonacciWithSideEffects(6, 0)) 