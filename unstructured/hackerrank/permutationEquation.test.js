const permutationEquation = require('./permutationEquation');

test('returns an array of values for p(p(x)) where x is the index of each ele in the array', () => {
    expect(permutationEquation([5,2,1,3,4])).toEqual([4,2,5,1,3]);
})