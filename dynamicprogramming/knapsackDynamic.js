// given two arrays, one with a list of profits and one with a list of weights
// return the maximum possible profit while also ensuring the combined weights
// do not exceed the capacity

// inputs -- 2 arrays and an integer
// outputs -- integer 
// contstraints -- weights must not be greater than capacity
// edge cases 
const knapsack = (profits, weights, capacity) => {  

    const recursion = ( profits, weights, capacity, currentIdx) => {
        if (capacity <= 0 || currentIdx > weights.length) return 0;
        
        //recursion call incrementing a profit counter if the profit from currentIdx is included
        let profit1 = 0;
        if (weights[currentIdx] <= capacity) {
            profit1 = profits[currentIdx] + recursion(profits, weights, capacity - weights[currentIdx], currentIdx + 1)

        }
        // recursion call incrementing a profit counter if currentIdx is not included
        const profit2 = recursion(profits, weights, capacity, currentIdx + 1);
        return Math.max(profit1, profit2)
    }

    return recursion(profits, weights, capacity, 0)

}
