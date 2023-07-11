/* 
Is unique
CTCI 1.01
Successfully tested the function July 11, 2023.
Implement an algorithm to determine if a string has 
all unique characters. What if you cannot use additional 
data structures?

Idea 1
Store each character from the input as a key
in a map and store the frequency of the character
as the key's value. Finally, return false if any 
character's frequency is greater than 1. 

Idea 2
Step through the string. At each step, store the value of the 
present character. Then scan the array: does any char match 
the present char? If yes, then return false. This solution is O(N^2) or O(kN)
*/

const isUniqueWithMap = (str) => {
    let charMap = new Map();
    let xInt = 0;
    // build up the char map
    while (xInt < str.length){
        let char = str[xInt];
        if (charMap.has(char)){
            let frequencyInt = charMap.get(char);
            charMap.set(char, frequencyInt + 1)
        }
        if (!charMap.has(char)){
            charMap.set(char, 1)
        }
        xInt++
    }
    // iterate through the charMap
    for (const [keyStr, valueInt] of charMap){
        if (valueInt > 1){
            return false
        }
    }
    return true
}

const isUniqueConstantSpace = (str) => {
    let iInt = 0;
    let jInt = 0
    while (iInt < str.length){
        jInt = iInt + 1
        let char1 = str[iInt];
        while (jInt < str.length){
        let char2 = str[jInt]
            if (char2 === char1){
                return false
            }
            jInt++
        }
        iInt++
    }
    return true
}


/* Tests */
const str1 = 'hello' // false
const str2 = 'wake' // true
const str3 = 'forest' // true
const str4 = 'wake forest' // false

const tof1 = isUniqueWithMap(str1);
const tof2 = isUniqueWithMap(str2);
const tof3 = isUniqueWithMap(str3);
const tof4 = isUniqueWithMap(str4);

const tof5 = isUniqueConstantSpace(str1);
const tof6 = isUniqueConstantSpace(str2);
const tof7 = isUniqueConstantSpace(str3);
const tof8 = isUniqueConstantSpace(str4);

console.log('Result 1:', tof1);
console.log('Result 2:', tof2);
console.log('Result 3:', tof3);
console.log('Result 4:', tof4);
console.log('Result 5:', tof5);
console.log('Result 6:', tof6);
console.log('Result 7:', tof7);
console.log('Result 8:', tof8);

/* Test results

Result 1: false
Result 2: true
Result 3: true
Result 4: false
Result 5: false
Result 6: true
Result 7: true
Result 8: false

*/