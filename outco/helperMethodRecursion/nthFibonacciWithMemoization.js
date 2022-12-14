// solution untested and buggy as of 12/14/22

const nthFibWithMemoization = (n) =>{
    
    
    let hash = {}
    const solve = (num) => {
        console.log(hash)
        console.log(num)
        if (hash[num] == null){
            let prev  = solve(num - 1) + solve(num -2);
            hash[num] = prev;
        }
        console.log(hash)
        // 4 is greater than 2...
        if (num < 2){
            return
        }
        console.log(hash)
        hash[num] = solve(num - 1) + solve(num - 2)
        return hash[num]
    }
    solve(n);
}

console.log(nthFibWithMemoization(4))
// console.log(nthFibWithMemoization(100))
