const longestSubstr2 = require("./longestSubstr2");

test('function returns the length of the longest substring of unique chars from a string', () =>{
    expect(longestSubstr2('aabcc')).toBe(3);
})