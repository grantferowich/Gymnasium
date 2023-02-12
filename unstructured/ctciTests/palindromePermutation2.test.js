const palindromePermutation2 = require('./palindromePermutation2');

test('determines if a string is a permutation of a palindrome', () => {
    expect(palindromePermutation2('hannah')).toBe(true);
    expect(palindromePermutation2('taco cat')).toBe(true);
    expect(palindromePermutation2('h')).toBe(true);
    expect(palindromePermutation2('aannhh')).toBe(true);
    expect(palindromePermutation2('aab')).toBe(true);
    expect(palindromePermutation2('code')).toBe(false);
    expect(palindromePermutation2('joe schmo')).toBe(false);
})
