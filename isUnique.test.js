const isUnique = require('./isUnique')

test('properly returns whether or not a string contains only unique characters', ()=>{
  expect(isUnique('abc')).toBe(true)
});



// describe('isUnique', () => {
//   it('should return true when a string contains only unique characters', 
//   () => {
//     expect(isUnique('abc')).toBe(true);
//   });
// });

// expect(isUnique('a')).toBe(true);
// it('should return false if any character is repeated'), () => {
//   expect(isUnique('abcc')).toBe(false);
//   expect(isUnique('axx')).toBe(false);
// };