// NTH FIBONACII 
// The approach to the nth fibonacci function
// using pure recursion is top-down. 
// The pure recursion solution uses multiple recursion.

// Successfully tested the solution featuring pure recursion on 12/10/22.
/* 


*/
const nthFibonacciPureRecursion = ( num ) => {
    return (num < 2) ? num : nthFibonacciPureRecursion(num - 1) + nthFibonacciPureRecursion(num - 2)
}
/* TESTS */
console.log(`Test 1: `+nthFibonacciPureRecursion(6)) 
console.log(`Test 2: `+nthFibonacciPureRecursion(4))
console.log(`Test 3: `+nthFibonacciPureRecursion(9))
/* TEST RESULTS 
Test 1: 8
Test 2: 3
Test 3: 34
*/