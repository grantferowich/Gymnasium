// 1/16/23
// Note to self: CSV parsing works welll when you have data types such as integers.
// When you have data types such as long strings, or paragraphs, the csv parser is going to catch on every comma.
// The resulting data becomes fragmented. I saw an option on Google Sheets for tab separated values.
// TSV formatting may be something to explore.
const fs = require('fs');
const csv = fs.readFileSync('./accountabilityTracker.csv', 'utf-8')
console.log(csv)

const parseCSV = (csv) => {
    // split the string into an array
    const data = csv.split('\n')
    // init state variable
    const parsedData = []

    // loop over the array    
    for (let line of data){
        // process the array data
        const fields = line.split(',');
        // push the processed array data to a state variable
        parsedData.push(fields)
    }

    // return the state variable
    return parsedData
}


console.log(parseCSV(csv));



