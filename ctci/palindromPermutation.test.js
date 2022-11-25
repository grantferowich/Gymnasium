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
