const twoSum = require("../outco/frequencyCount/twoSum")

test('returns a log of true when two elements sum together to equal the target', () => {
    expect(twoSum([4,2,6,5,7,9,10], 19)).toBe(true);
    expect(twoSum([4,2,6,5,7,9,10], 13)).toBe(true);
})

test('returns a log of false when there are no combination of elements that would sum to equal the target', () => {
    expect(twoSum([4,2,6,5,7,9,10], 90)).toBe(false);
})




