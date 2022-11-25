const kUniqueChars = require('./kUniqueChars');

test('the function returns the longest substring of k unique chars in a string', () => {
    expect(kUniqueChars('2eceba')).toBe(3);
})