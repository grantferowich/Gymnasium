// given a number return the factorial of that number
// 4! = 1 * 2 * 3 * 4 
// 4! = 24


// Time: O(N)
// Space: O(1)
const factorial = (number) => {
    let product = 1
    const multiply = (num) => {
        if (num > number) { return;}
        product *= num
        multiply(num + 1)
    }
    multiply(1);
    return product;
}

console.log(factorial(4)) // 24
console.log(factorial(100)) //

