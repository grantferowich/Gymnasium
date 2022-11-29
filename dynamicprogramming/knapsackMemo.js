const knapsackMemo = (profits, weights, capacity) => {
    // init memo array
    const dynamicprogramming = [];

    const recursion = (profits, weights, capacity, currentIdx) {
        if (capacity <= 0 || currentIdx > weights.length) return 0;

        dynamicprogramming[currentIdx] = dynamicprogramming[currentIdx] || [];
        // cache the existence of currentIdx, capacity in the memo array
        if (typeof dynamicprogramming[currentIdx][capacity] !== 'undefined'){
            return dynamicprogramming[currentIdx][capacity];
        }

        // include profits[CurrentIdx]
        let profit1 = 0;
        if (weights[currentIdx] <= capacity){
            profit1 = profits[currentIdx] + recursion(profits, weights, capacity - weights[currentIdx], currentIdx + 1)
        }

        // exclude profits[currentIdx]
        const profit2 = recursion(profits, weights, capacity, currentIdx + 1);
        
        // cache the specific value in the memo array 
        dynamicprogramming[currentIdx][capacity] = Math.max(profit1, profit2);
        return dynamicprogramming[currentIdx][capacity]; 
    }
    return recursion(profits, weights, capacity, 0)
}