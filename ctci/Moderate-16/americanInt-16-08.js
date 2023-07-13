/* 
American Int
CTCI 16.08

Unfinished as of July 13, 2023.

Given any integer, print an American phrase that describes the number.

input: 1234 
output: "One thousand two hundred thirty four"

input: 23
output: "twenty three"

input: 23.11
output: "twenty three point one one"

Create a map. Map numbers to the American word.
*/

const americanInt = (int) => {
    let map = new Map();
    map.set("0", "zero")
    map.set("1", "one");
    map.set("2", "two");
    map.set("3", "three");
    map.set("4", "four");
    map.set("5", "five");
    map.set("6", "six");
    map.set("7", "seven");
    map.set("8", "eight");
    map.set("9", "nine");
    map.set("10", "ten");
    map.set("11", "eleven");
    map.set("12", "twelve");
    map.set("13", "thirteen");
    map.set("14", "fourteen");
    map.set("15", "fifteen");
    map.set("16", "sixteen");
    map.set("17", "seventeen");
    map.set("18", "eighteen");
    map.set("19", "nineteen");
    map.set("20", "twenty");
    map.set("30", "thirty");
    map.set("40", "fourty");
    map.set("50", "fifty");
    map.set("60", "sixty");
    map.set("70", "seventy");
    map.set("80", "eighty");
    map.set("90", "ninety");
    

    let finalStr = "";
    if (int.toString().includes(".")){
        finalStr += "point";
    }
    const int2Str = int.toString();
    const decimalInt = int2Str.split(".")[1];
    const decimalStr = decimalInt.toString;
    let decimalArr = [];
    let xInt = 0;
    // put the decimal portion in American in an array
    while (xInt < decimalStr.length){
        let numStr = decimalStr[xInt];
        let wordStr = map.get(numStr);
        decimalArr.push(wordStr)
        xInt++
    }
    let intStr = int2Str[0];
    xInt = intStr.length - 1;
    while (xInt < intStr.length){
        if (intStr.length < 2){
            let intChar = intStr[xInt];

        }
        let placeInt = 1
        if (placeInt )
        
        xInt++;
    }


}

/* Test */
const inputInt1 = 1234
const inputInt2 = 23
const inputInt3 = 23.11
const resultStr1 = americanInt(inputInt1);
const resultStr2 = americanInt(inputInt2);
const resultStr3 = americanInt(inputInt3);
console.log('Result 1:', resultStr1);
console.log('Result 2:', resultStr2);
console.log('Result 3:', resultStr3);


/* Test result */