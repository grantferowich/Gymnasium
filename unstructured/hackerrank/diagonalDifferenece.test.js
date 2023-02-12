const diagonalDifference = require('./diagonalDifference');

test('returns the absolute difference between the left and right diagonal sums in a 2-d array', () => {
    expect(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]])).toBe(2);
});