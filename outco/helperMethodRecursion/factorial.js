// given a number return the factorial of that number
// 4! = 1 * 2 * 3 * 4 
// 4! = 24


// Time: O(N)
// Space: O(1)
const factorial = (number) => {
    // state variable
    let product = 1;
    // define helper function
    const multiply = (num) => {
        // base case
        if (num > number) { return;}
        product *= num;
        // recursive case
        multiply(num + 1);
    }
    // invoke helper function
    multiply(1);
    // return state variable
    return product;
}

console.log(factorial(4)) // 24
console.log(factorial(100)) //

