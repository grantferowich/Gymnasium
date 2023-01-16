// 1/16/23
// Note to self: CSV parsing works welll when you have data types such as integers.
// When you have data types such as long strings, or paragraphs, the csv parser is going to catch on every comma.
// The resulting data becomes fragmented. I saw an option on Google Sheets for tab separated values.
// TSV formatting may be something to explore.
const fs = require('fs');
const csv = fs.readFileSync('./accountabilityTracker.csv', 'utf-8')
console.log(csv)

const parseCSV = (csv) => {

    const data = csv.split('\n')
    const parsedData = []
    for (let line of data){
        const fields = line.split(',');
        parsedData.push(fields)
    }
    return parsedData
}

const parsedData = parseCSV(csv);
// return [[name, notes],
      // [caesdar's ciper, ....]]

const generateAlgorithmSummaries = ( arrayOfArrays ) => {
    let result = [];
    let x = 0;
    while (x < 5){
        let line = arrayOfArrays[x]
        console.log('name: ', line[0])
        console.log('notes: ', line[11])
        x++
    }
} 

generateAlgorithmSummaries(parsedData)
