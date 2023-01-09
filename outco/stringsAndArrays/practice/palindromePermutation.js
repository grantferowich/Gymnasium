// successfully tested the function 1/4/23
// Given a string, determine if a permutation of the string could form a palindrome.
// Given a string write a function to determine if the string
// is a permutation of a palindrom
// clarify whether or not there are spaces in the given string
// for the case where there are spaces the space must be removed
// or else the hash/set will count spaces as chars with an odd value
//
// tact coa => true: taco cat, atco cta
// hannah => true, hannah, nahhan

// Solution: Compare the first character with the last character
// if the two characters are the same, then increment 
// input: a string
// output: boolean
// 
const palindromePermutation = (s) => {
    //remove spaces
    s = s.toLowerCase().replace(/\s/g, "")
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
            odds += 1;
        }
    }
    return (odds <= 1)
}

console.log(palindromePermutation('carerac')) 