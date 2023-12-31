// successfully tested the solution on 12/24/2022

const nthFibWithMemoization = (n) =>{
    let hash = {}
    const solve = (num) => {
        let key = num.toString();
        // check the cache
        if (hash[key]) {return hash[key]}
        // base case: set the key's value to the input num
        if (num < 2){
            return hash[key] = num;
        }
        return hash[key] = solve(num - 1) + solve(num - 2)
    }
    return solve(n);
}
/* TESTS */
console.log(`Test 1: `+nthFibWithMemoization(4))
console.log(`Test 2: `+nthFibWithMemoization(100))
console.log(`Test 3: `+nthFibWithMemoization(7))
/* TEST RESULTS 
Test 1: 3
Test 2: 354224848179262000000
Test 3: 13
*/