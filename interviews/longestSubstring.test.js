const longestSubstring = require('./longestSubstring');

test('the function returns the length of the longest substring of unique chars', () => {
    expect(longestSubstring('aabcc')).toBe(3);
    expect(longestSubstring('abcabcbb')).toBe(3);
    expect(longestSubstring('bbbbbbbb')).toBe(1);
    expect(longestSubstring('pwwkew')).toBe(3);
    expect(longestSubstring('owwkewrt')).toBe(5);
})