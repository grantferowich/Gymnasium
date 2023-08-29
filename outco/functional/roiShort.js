// Developed August 28, 2023 
// file is called roiShort.js
const axios = require('axios');
// inputs: api key string, asset quantity, and index date
// output: $ value of the position 
const calculateInitialPositionInt = async (APISymbolStr, quantityInt ,indexDateStr) => {     
    let historicalPriceAPIStr = "https://api.coingecko.com/api/v3/coins/"+APISymbolStr+"/history?date="+indexDateStr+"&localization=false";
    let historicalPriceInt = await axios.get(historicalPriceAPIStr).then((response) => response.data.market_data.current_price.usd);
    let initialPositionValueInt = historicalPriceInt * quantityInt;
    return initialPositionValueInt.toFixed(2);
}

const calculateDifferenceInt = async (APISymbolStr, quantityInt, indexDateStr) => {
    let historicalPriceAPIStr = "https://api.coingecko.com/api/v3/coins/"+APISymbolStr+"/history?date="+indexDateStr+"&localization=false";
    let historicalPriceInt = await axios.get(historicalPriceAPIStr).then((response) => response.data.market_data.current_price.usd);
    let presentPriceAPIStr = "https://api.coingecko.com/api/v3/simple/price?ids="+APISymbolStr+"&vs_currencies=usd";
    let presentPriceInt = await axios.get(presentPriceAPIStr).then((response) => response.data[APISymbolStr].usd); 
    let differenceInt = -1 * (presentPriceInt - historicalPriceInt) * quantityInt;
    return differenceInt.toFixed(2)
}

const calculatePresentPositionInt = (initialPositionValueInt, differenceInt) => {
    let currentPositionInt = parseFloat(initialPositionValueInt) + parseFloat(differenceInt)
    return currentPositionInt.toFixed(2)
}   

const calculatePercentageROIInt = (initialInt, presentInt) => {
    let percentageInt = ((presentInt - initialInt) / initialInt) * 100;
    return percentageInt.toFixed(2)
}

const callFunctions = async () => {
    const initialBitcoinPositionValueInt = await calculateInitialPositionInt("bitcoin", 1, "01-01-2023");
    console.log("Intial Bitcoin position value: $", initialBitcoinPositionValueInt);
    const differenceBetweenInitialAndCurrentInt = await calculateDifferenceInt("bitcoin", 1, "01-01-2023")
    console.log("Difference between initial position and current position in $:", differenceBetweenInitialAndCurrentInt);
    const presentPositionInt = calculatePresentPositionInt(initialBitcoinPositionValueInt, differenceBetweenInitialAndCurrentInt);
    console.log("Present Bitcoin position value: $", presentPositionInt)
    const percentageROIInt = calculatePercentageROIInt(initialBitcoinPositionValueInt, presentPositionInt);
    console.log("ROI in % terms:", percentageROIInt)
}


callFunctions();