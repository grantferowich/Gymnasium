const longestSubstr3 = require("./longestSubstr3");

test('function returns the length of the longest substring of unique chars from a string', () =>{
    expect(longestSubstr3('aabcc')).toBe(3);
})