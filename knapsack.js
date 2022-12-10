// given two arrays, one with a list of profits and one with a list of weights
// return the maximum possible profit while also ensuring the combined weights
// do not exceed the capacity
// profits = [1, 6, 10, 16]
// weights = [1, 2, 3, 5]
// capacity = 7
//(knapsack(profits, weights, capacity)).toBe(22);
// put 2 and 5 together, which is 16 and 6

const knapsack = (profits, weights, capacity) => {
    if (capacity <= 0 ){
        return 0;
    }
    let maxProfit = 1;
    let currentProfit = 0;
    for (let i = 0; i < weights.length; i++){
      for( let j = 0; j < weights.length; j++){
          if ( (i !== j) && (weights[i] +  weights[j] <= capacity)){
          currentProfit = profits[i] + profits[j];
      }}
      maxProfit = Math.max(currentProfit, maxProfit);
    }
    return maxProfit;
  };

module.exports = knapsack