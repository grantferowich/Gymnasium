const knapsack = require('./knapsack');

test('knapsack takes in an array of profits, weights, and capacity and returns the max profit', ()=>{
    expect(knapsack([1, 6, 10, 16],[1, 2, 3, 5],7)).toBe(22);
    expect(knapsack([1, 6, 10, 16],[1, 2, 3, 5],6)).toBe(17);
})