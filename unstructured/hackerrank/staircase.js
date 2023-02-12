// Staircase takes in an integer as a parameter
// Staircase prints a staircase with i number of #'s starting at position n - i
// where i increments
// Staircase prints " " n-i  times 

// staircase(3)
//   # => n-i spaces, i = 1 spaces, i = 1 hashes
//  ## 
// ###

const staircase = (n) => {
    for (let i = 1; i <= n; i++){
        console.log(' '.repeat(n-i) + '#'.repeat(i));
        return (' '.repeat(n-i) + '#'.repeat(i));
    }
}

module.exports = staircase