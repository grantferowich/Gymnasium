const buyAndSellStock = (arr) => {

    let minPrice = Infinity;
    let maxProfit = 0
    for ( let x = 0; x < arr.length; x++){
       minPrice = Math.min(minPrice, arr[x])
       maxProfit = Math.max(maxProfit, arr[x] - minPrice)
    }
    return maxProfit
}

let input = [7, 1, 5, 3, 6, 4]
console.log(buyAndSellStock(input)); // 5
let input2 = [7, 6, 4, 3, 1]
console.log(buyAndSellStock(input2)); // 0