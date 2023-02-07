
// two pointers, x and y
// let arr[x] be the buy price
// let arr[y] be the sell price
// let max = 0
// for each x calculate sell price at y minus buy price x
// if current is greater than max 
// let max be current
// Math.max(current, max)

const buyAndSellStock = (arr) => {
    let x = 0;
    let y = arr.length -1
    let max = 0;
    let result = [0,0]
    while (x < arr.length && y > x){
        while (y > x){
            let current = arr[y] - arr[x];
            if (current > max){
                result[0] = arr[x]
                result[1] = arr[y]
                max = Math.max(max, current)
            }
            y--;
            x++;
        }
    }
    console.log('buy price:', result[0])
    console.log('sell price:', result[1])
    return max
}

let input = [7, 1, 5, 3, 6, 4]
console.log(buyAndSellStock(input)); // 5
let input2 = [7, 6, 4, 3, 1]
console.log(buyAndSellStock(input2)); // 0