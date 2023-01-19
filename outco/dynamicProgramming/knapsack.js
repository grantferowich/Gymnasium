/* 
// Successfully tested 1/18/23.
Complexity analysis
Time Complexity: O(NM)
Space Complexity: O(NM)

Input: An integer array of weights
       An integer array of values
           (The ith item has weights[i] and values[i])
       Integer value of the max weight capacity of the knapsack
Output: Integer of maximum total value\

recursive case here: including an item and its value, or not

Memoization: 
create the memo as an array whose length is the length of the weights array
create the memo as a 2-d array: for every x in cache, instantiate a new array of size capacity plus one.
Fill the nested array with -1s.


*/

const knapsack = (weights, values, capacity) => {
    let cache = new Array(weights.length);
    
    for (let x = 0; x < weights.length; x++){
        cache[x] = new Array(capacity + 1).fill(-1)
    }
    
    const recurse = (cache, weights, values, capacity, index) => {
       
        // base case
        if (capacity <= 0 || index >= weights.length){
            return 0;
        }

        // recursive case
        let valueX = 0;

        // iterating through the weights array with index
        // if its possible to add the current item without exceeding the capacity 
        // then add the associated value from values array to a var called valueX
        
        if (weights[index] <= capacity){
            // include present item
            valueX = values[index] + recurse(cache, weights, values, capacity - weights[index], index + 1)
        }

        // exclude present item
        let valueX2 =  recurse(cache, weights, values, capacity, index+1);
       
        cache[index][capacity] = Math.max(valueX, valueX2);
        return cache[index][capacity] = Math.max(valueX, valueX2);
    }
    return recurse(cache, weights, values, capacity, 0);
}
// knapsack(weights, values, capacity)
console.log(knapsack([6,6,6,6], [3,5,8,13], 12)) // 21
console.log(knapsack([3,5,8,13], [6,6,6,6], 13)) // 12
console.log(knapsack([3,5,8,13], [6,6,6,6], 2)) // 0
