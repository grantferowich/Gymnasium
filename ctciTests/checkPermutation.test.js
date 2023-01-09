
const checkPermutation = require('../outco/stringsAndArrays/checkPermutation')

test('decides if the second string is a permutation of the first string', ()=>{
    expect(checkPermutation('abc', 'bca')).toBe(true);
    expect(checkPermutation('xyz', 'gfh')).toBe(false);
    expect(checkPermutation('abcc', 'cbca')).toBe(true);
    expect(checkPermutation('xyz', 'xyyz')).toBe(false);
})