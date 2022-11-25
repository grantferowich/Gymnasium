// write a function that finds the largest number in an array
// return the number of times said number appears

birthdayCakeCandles([3,2,1,3]) // 2

function birthdayCakeCandles(candles) {
    let max = 1;
    for (let i = 0; i < candles.length; i++){
        
        if (candles[i] > max){
            max = candles[i];
        }
    }
    let count = 0;
    for (let j = 0; j < candles.length; j++){
        if (candles[j] == max){
            count++
        }
    }
    return count;
}

