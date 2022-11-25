const knapsack = (profits, weights, capacity) => {
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