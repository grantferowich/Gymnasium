// NTH FIBONACII 
// The approach to the nth fibonacci function
// using pure recursion is top-down. 
// The pure recursion solution uses multiple recursion.

// Successfully tested the solution featuring pure recursion on 12/10/22.

const nthFibonacciPureRecursion = ( num ) => {
    return (num < 2) ? num : nthFibonacciPureRecursion(num - 1) + nthFibonacciPureRecursion(num - 2)
}


console.log(nthFibonacciPureRecursion(6)) 