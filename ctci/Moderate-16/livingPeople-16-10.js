/* 
Living People
CTCI 16.10
Successfully tested the question on July 13, 2023.
*/
class Person{
    constructor(bornInt, deadInt){
        this.bornInt = bornInt;
        this.deadInt = deadInt;
    }
}
// in 1940 there were 7 people alive
/* maximumLivingPeople */
const maximumLivingPeople = (arr) => {
    let yearsMap = new Map()
    let startInt = 1900;
    let endYearInt = 2000;
    let xInt = startInt;
    // create the years map
    // the years map has yearInts as keys
    // each year has a map with three fields: 
    // bornInt, deadInt, totalInt
    while (xInt <= endYearInt){
        yearsMap.set(xInt, new Map());
        let yearMap = yearsMap.get(xInt);
        yearMap.set("bornInt", 0);
        yearMap.set("deadInt", 0);
        yearMap.set("totalInt", 0);
        xInt++;
    }
    let gInt = 0;
    // loop over the input array to populate the yearsMap
    while (gInt < arr.length){
        let personHM = arr[gInt];
        let bornYearInt = personHM['bornInt'];
        let deathYearInt = personHM['deadInt'];
        let bornIntFrequencyInt = yearsMap.get(bornYearInt).get('bornInt');
        let deathIntFrequencyInt = yearsMap.get(deathYearInt).get('deadInt');
        yearsMap.get(bornYearInt).set('bornInt', bornIntFrequencyInt + 1);
        yearsMap.get(deathYearInt).set('deadInt', deathIntFrequencyInt + 1);
        gInt++;
    }
    let totalInt = 0;
    xInt = 1900;
    // loop through the map by looping from 1900 to 2000
    // the point of the point here is to determine the total number of people
    // living in that particular year
    while (xInt <= endYearInt){
        let decrementInt;
        if (yearsMap.get(xInt - 1)) {
            decrementInt = yearsMap.get(xInt - 1).deadInt;
        }
        if (decrementInt !== undefined && decrementInt > 0){
            totalInt -= decrementInt;
        }
        let incrementInt = yearsMap.get(xInt).get('bornInt');
        if (incrementInt !== undefined && incrementInt > 0){
            totalInt += incrementInt;
        }
        yearsMap.get(xInt).set('totalInt', totalInt);
        xInt++
    }
    let maxTuple = [-Infinity, -Infinity]; 
    // finally check all of the totalInt fields to find the largest 
    for (const [keyInt, valueMap] of yearsMap){
        let currentTotalInt;
        if (valueMap.get('totalInt')){
            currentTotalInt = valueMap.get('totalInt') 
        }
        if (currentTotalInt > maxTuple[1]){
            maxTuple[0] = keyInt;
            maxTuple[1] = currentTotalInt;
        }
    }
    return maxTuple[1]
}

/* Tests */
let personsArr1 = [];
personsArr1.push(new Person(1900, 1990));
personsArr1.push(new Person(1901, 1950));
personsArr1.push(new Person(1903, 1960));
personsArr1.push(new Person(1900, 1980));
personsArr1.push(new Person(1904, 1987));
personsArr1.push(new Person(1940, 1949));
personsArr1.push(new Person(1940, 1945));
const int1 = maximumLivingPeople(personsArr1);
console.log('Result 1:', int1) // 1940: 7 

/* Test result 
Result 1: 7

*/