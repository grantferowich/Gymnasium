// 1/16/23
// Note to self: CSV parsing works welll when you have data types such as integers.
// When you have data types such as long strings, or paragraphs, the csv parser is going to catch on every comma.
// The resulting data becomes fragmented. I saw an option on Google Sheets for tab separated values.
// TSV formatting may be something to explore.
const fs = require('fs');
const csv = fs.readFileSync('./Syracuse_Public_Art.csv', 'utf-8')
console.log(csv)

const parseCSV = (csv) => {
    // split the string into an array
    const data = csv.split('\n')
    // init state variable
    const parsedDataArr = []

    // loop over the array    
    for (let line of data){
        // process the array data
        const fields = line.split(',');
        // create the map object
        let placeMap = new Map()

        placeMap.set("X", fields[0])
        placeMap.set('Y', fields[1])
        placeMap.set('FID', fields[2])
        placeMap.set('Title', fields[3])
        placeMap.set('Type', fields[4])
        placeMap.set('Address',fields[5] )
        placeMap.set('Latitude', fields[6])
        placeMap.set('Longitude', fields[7])
        placeMap.set('Artist_Last_', fields[8])
        placeMap.set('Artist_First', fields[9])
        placeMap.set('Additional_Artists', fields[10])
        placeMap.set('Media', fields[11])
        placeMap.set('Year_Created', fields[12])
        placeMap.set('Year_Erected', fields[13])
        placeMap.set('TNT_Area', fields[14])
        placeMap.set('Neighborhood', fields[15])
        placeMap.set('Specific_Location', fields[16])
        placeMap.set('Image_Url', fields[17])
        // add the map object to the array
        parsedDataArr.push(placeMap)
    }

    // return the state variable`
    return parsedDataArr
}


console.log(parseCSV(csv));


