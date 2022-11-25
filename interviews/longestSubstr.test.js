const longestSubstr = require('./longestSubstr');

test('the function returns the length of the longest substring of unique chars', () => {
    expect(longestSubstr('aabcc')).toBe(3);
})