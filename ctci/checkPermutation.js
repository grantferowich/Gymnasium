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
    if (s1.length != s2.length) {
        // console.log("false"); 
        return false
    }
    isPermutation = false;
    for (let i = 0; i < s2.length; i++) {
        if (s1.includes(s2[i])) {
            isPermutation = true;
        } else {
            return false
        }
    }
    return isPermutation;
}

checkPermutation("abcc", "cbca") // true
checkPermutation("xyz", "xyyz") //false 

module.exports = checkPermutation