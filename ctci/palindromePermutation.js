// Given a string write a function to determine if the string
// is a permutation of a palindrom
// clarify whether or not there are spaces in the given string
// for the case where there are spaces the space must be removed
// or else the hash/set will count spaces as chars with an odd value

const { tsModuleBlock } = require("@babel/types");

// tact coa => true: taco cat, atco cta
// hannah => true, hannah, nahhan


// Solution: Compare the first character with the last character
// if the two characters are the same, then increment 
// 


const palindromePermutation = (s) => {
    let hash = {}

    for (let i = 0; i < s.length; i++){
        let k = s[i]; 
        if ( k !== " "){
            hash[k] = hash[k] + 1 || 1;
        }
    }

    let odds = 0;
    for (let key in hash){
        if (hash[key] % 2 !== 0){
            odds = odds + 1 || 1;
        }
    }

    if (odds > 1 ){
        return false;
    } else {
        return true;
    }
}

module.exports = palindromePermutation