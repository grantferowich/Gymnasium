const longestSubstr = require('./longestSubstr');

test('the function returns the length of the longest substring of unique chars', () => {
    expect(longestSubstr('aabcc')).toBe(3);
    expect(longestSubstr('abcabcbb')).toBe(3);
    expect(longestSubstr('bbbbbbbb')).toBe(1);
    expect(longestSubstr('pwwkew')).toBe(3);
    expect(longestSubstr('owwkewrt')).toBe(5);
})