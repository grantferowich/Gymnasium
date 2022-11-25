const isUnique2 = require('./isUnique');

test('returns true when a string is composed of unique characters', () => {
    expect(isUnique2('abcdefghij')).toBe(true)
})
test('returns false when a string contains repeated characters', ()=> {
    expect(isUnique2('aaaaa')).toBe(false);
})
