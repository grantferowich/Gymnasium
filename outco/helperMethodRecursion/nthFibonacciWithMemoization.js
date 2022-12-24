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

console.log(nthFibWithMemoization(4))
console.log(nthFibWithMemoization(100))
