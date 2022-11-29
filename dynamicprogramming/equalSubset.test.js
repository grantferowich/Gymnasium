const equalSubset = require('./equalSubset');

test('returns true if two sub-arrays in an array can be summed to equal the sum of the parts of the array', () => {
    expect(equalSubset([1,2,3,4])).toBe(true);
    expect(equalSubset([1,1,3,4,7])).toBe(true);    
})

test('should return false when the array does not have two partitions whose sums are the same ', () => { 
    expect(equalSubset([2,3,4,6])).toBe(false)
})

