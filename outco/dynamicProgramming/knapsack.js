// Successfully tested the solution 1/19/23.
// Solution takes in two arrays and a value.

const knapsackX3 = (weights, values, capacity) => {
    let cache = {};

    function recursive(cache, weights, values, capacity, index) {
        // base case
        if (capacity <= 0 || index >= weights.length) {
            return 0;
        }

        //Check if the subproblem has already been solved
        let key = index + '-' + capacity;
        if (key in cache) {
            return cache[key];
        }

        // recursive case
        let value1 = 0;

        if (weights[index] <= capacity) {
            value1 = values[index] + recursive(cache, weights, values, capacity - weights[index], index + 1);
        }

        let value2 = recursive(cache, weights, values, capacity, index + 1);

        // store the result of subproblem in cache
        cache[key] = Math.max(value1, value2);

        return cache[key];
    }

    return recursive(cache, weights, values, capacity, 0);
}

// knapsack(weights, values, capacity)
console.log(knapsackX3([6,6,6,6], [3,5,8,13], 12)) // 21
console.log(knapsackX3([3,5,8,13], [6,6,6,6], 13)) // 12
console.log(knapsackX3([3,5,8,13], [6,6,6,6], 2)) // 0
