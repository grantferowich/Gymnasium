/* 
Successfully tested the solution 1/4/23

Given two strings decide if the second string
is a permutation of the first string 

checkPermutation("abc", "cba") // true
checkPermutation("xyz", "fgh") // false
checkPermutation("abcc", "cbca") // true
checkPermutation("xyz", "xyyz") // false 

If the strings are different length return false
If the strings hold identical characters return true

Solution 1: for each character in the second string,
check if the first string includes the relevant character 

*/
const checkPermutation = (s1, s2) => {
    if (s1.length !== s2.length) { return false }
    let string1CharMap = {};
    for ( let x = 0; x < s1.length; x++){
        let char = s1[x];
        string1CharMap[char] = string1CharMap[char] + 1 || 1;
    }
    // console.log(string1CharMap)
    for (let x = 0; x < s2.length; x++){
        let char = s2[x];
        if (!string1CharMap[char]) { return false;}
        string1CharMap[char]--;
    }
    return true;
}

console.log(checkPermutation("abcc", "cbca")) // expected output: true
console.log(checkPermutation("xyz", "xyyz")) // expected output: false 
console.log(checkPermutation("abcc", "cccbca")) // expected output: false