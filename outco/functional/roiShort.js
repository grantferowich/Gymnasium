// Developed August 28, 2023 
// file is called roiShort.js
const axios = require('axios');
// inputs: api key string, asset quantity, and index date
// output: $ value of the position 
const calculateInitialPositionInt = async (APISymbolStr, quantityInt ,indexDateStr) => {     
    let historicalPriceAPIStr = "https://api.coingecko.com/api/v3/coins/"+APISymbolStr+"/history?date="+indexDateStr+"&localization=false";
    let historicalPriceInt = await axios.get(historicalPriceAPIStr).then((response) => response.data.market_data.current_price.usd);
    let initialPositionValueInt = parseInt(historicalPriceInt * quantityInt);
    return initialPositionValueInt;
}

const calculatePresentPositionInt = async (APISymbolStr, quantityInt, indexDateStr) => {
    let historicalPriceAPIStr = "https://api.coingecko.com/api/v3/coins/"+APISymbolStr+"/history?date="+indexDateStr+"&localization=false";
    let historicalPriceInt = await axios.get(historicalPriceAPIStr).then((response) => response.data.market_data.current_price.usd);
    let presentPriceAPIStr = "https://api.coingecko.com/api/v3/simple/price?ids="+APISymbolStr+"&vs_currencies=usd";
    let presentPriceInt = await axios.get(presentPriceAPIStr).then((response) => response.data[APISymbolStr].usd); 
    let differenceInt = -1 * (presentPriceInt - historicalPriceInt) * quantityInt;
    let initialPositionValueInt = await calculateInitialPositionInt(APISymbolStr, quantityInt, indexDateStr);
    let presentPositionValueInt = initialPositionValueInt + differenceInt;
    return presentPositionValueInt;
}

const calculatePercentageROIInt = (initialInt, presentInt) => {
    return ((presentInt - initialInt) / initialInt) * 100
}

const callFunction = async () => {
    const initialBitcoinPositionValueInt = await calculateInitialPositionInt("bitcoin", 1, "01-01-2023");
    console.log("Intial Bitcoin position value: $", initialBitcoinPositionValueInt);
    const presentBasketValueInt = await calculatePresentPositionInt("bitcoin", 1, "01-01-2023");
    console.log("Present Bitcoin position value: $", presentBasketValueInt)
    const percentageROIInt = calculatePercentageROIInt(initialBitcoinPositionValueInt, presentBasketValueInt);
    console.log("ROI in percentage terms:", percentageROIInt)
}


callFunction();