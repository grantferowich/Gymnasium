// NTH FIBONACCI

// implementation of the nth fibonacci function with single recursion 
// and a bottom-up approach
const nthFibonacciSideEffects = (number, i, fibonacci) => {
    fibonacci = fibonacci || [0,1]
    i = i || 2;
    if ( n < 2){ return fibonacci[n];}
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    if ( i === number ){ return fibonacci[i]}

    return nthFibonacciSideEffects(number, i+1, fibonacci)
}
