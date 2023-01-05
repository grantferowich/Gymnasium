// Successfully tested the solution 1/4/23

//given two strings decide if the second string
// is a permutation of the first string 

// ("abc", "cba") // true
// ("xyz", "fgh") // false
// ("abcc", "cbca") // true
// ("xyz", "xyyz") //false 

// if the strings are different length return false
// if the strings hold identical characters return true

// Solution 1: for each character in the second string,
// check if the first string includes the relevant character 

const checkPermutation = (s1, s2) => {
    if (s1.length !== s2.length) { return false }

    let string1CharMap = {};
    for (let char in s1){
        string1CharMap[char] = string1CharMap[char] + 1 || 1;
    }

    for (let char in s2){
        if (!string1CharMap[char]) { return false;}
        string1CharMap[char]--;
    }
    return true;

}

console.log(checkPermutation("abcc", "cbca")) // true
console.log(checkPermutation("xyz", "xyyz")) //false 