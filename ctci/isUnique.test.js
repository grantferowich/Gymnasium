const isUnique = require('./isUnique')

test('properly returns whether or not a string contains only unique characters', ()=>{
  expect(isUnique('abc')).toBe(true);
  expect(isUnique('a')).toBe(true);
});

test('properly returns false when there are repeats', () => {
  expect(isUnique('axx')).toBe(false);
  expect(isUnique('bbccaa')).toBe(false);
})

