/* 
17. Letter Combinations of a Phone Number
Medium
Started development on August 11, 2023.

Given a string containing digits from 2-9 
inclusive, return all possible letter 
combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the 
telephone buttons) is given below. Note that 1 
does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"] */

const letterCombinationsOfAPhoneNumber = (str) =>{
    if (str.length === 0){
        return [];
    }
    let digitsMap = new Map();
    digitsMap.set("1", "");
    digitsMap.set("2", "abc");
    digitsMap.set("3", "def");
    digitsMap.set("4", "ghi");
    digitsMap.set("5", "jkl");
    digitsMap.set("6", "mno");
    digitsMap.set("7", "pqrs");
    digitsMap.set("8", "tuv");
    digitsMap.set("9", "wxyz");
    digitsMap.set("0", "");

    let buildArr = [];

    const traverse = (buildArr, strX, depthInt) => {
        // add built up string to output arr
        if (strX.length === str.length){
            buildArr.push(strX);
            return;
        }
        // termination
        if (depthInt >= str.length){
            return;
        }
        
        let digitsStr = digitsMap.get(str[depthInt])
        let xInt = 0;
        while (xInt < digitsStr.length){
            let character = digitsStr[xInt];
            let updatedString = strX + character;
            traverse(buildArr, updatedString, depthInt + 1)
            xInt++
        }
    }
    traverse(buildArr, "", 0);
    return buildArr;
}

/* Tests */
const digitsStr1 = "2";
const resultArr1 = letterCombinationsOfAPhoneNumber(digitsStr1);

const digitsStr2 = "23";
const resultArr2 = letterCombinationsOfAPhoneNumber(digitsStr2);
console.log("Results 1: ", resultArr1);
console.log("Results 2: ", resultArr2);

/* Tests results */