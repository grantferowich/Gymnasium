const palindromePermutation = require('./palindromePermutation');

test('determines if a string is a permutation of a palindrome', () => {
    expect(palindromePermutation('hannah')).toBe(true);
    expect(palindromePermutation('taco cat')).toBe(true);
    expect(palindromePermutation('h')).toBe(true);
    expect(palindromePermutation('aannhh')).toBe(true);
    expect(palindromePermutation('aab')).toBe(true);
    expect(palindromePermutation('code')).toBe(false);
    expect(palindromePermutation('joe schmo')).toBe(false);
})

// test('the odds variable increments when a value is not even', () => {
//     const palindromePermutation('joe schmo');
//     expect(palindromePermutation.odds).toBe(6);
// })

