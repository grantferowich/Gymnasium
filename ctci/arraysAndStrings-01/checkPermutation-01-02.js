/* 
Check Permutation
CTCI 1.02

Given two strings, write a method to decide if one is a permutation of another.

const str1 = rat 
const str2 = cat
output: false!

const str3 = taco
const str4 = octa
output: true

const str5 = wakeforest
const str6 = forestwake
output: true!

*/

const charMapMaker = (str) => {
    let map = new Map();
    let xInt = 0;
    while (xInt < str.length){
        let char = str[xInt]
        if (map.has(char)){
            let frequencyInt = map.get(char);
            map.set(char, frequencyInt + 1);
        }
        if (!map.has(char)){
            map.set(char, 1);
        }
        xInt++;
    }
    return map;
}

const checkPermutation = (str1, str2) => {
    const charMap1 = charMapMaker(str1)
    const charMap2 = charMapMaker(str2)
    for (const [keyStr, valueInt] of charMap1){
        let valueInt2 = charMap2.get(keyStr);
        if (valueInt !== valueInt2){
            return false
        }
    }
    return true;
}


/* Tests */

const str1 = 'rat' 
const str2 = 'cat'
// output: false!
const resultToF1 = checkPermutation(str1, str2);
console.log('Result 1: ', resultToF1);

const str3 = 'taco'
const str4 = 'octa'
const resultToF2 = checkPermutation(str3, str4);
console.log('Result 2: ', resultToF2);
// output: true

const str5 = 'wakeforest'
const str6 = 'forestwake'
const resultToF3 = checkPermutation(str5, str6);
console.log('Result 3: ', resultToF3);
// output: true!

/* Test results

Result 1:  false
Result 2:  true
Result 3:  true

*/