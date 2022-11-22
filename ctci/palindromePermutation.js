// Given a string write a function to determine if the string
// is a permutation of a palindrom
// clarify whether or not there are spaces in the given string
// for the case where there are spaces the space must be removed
// or else the hash/set will count spaces as chars with an odd value

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
        console.log("false");
        return false;
    } else {
        console.log('true')
        return true;
    }
}

// palindromePermutation('hannah') // true
// palindromePermutation('taco cat') // true
// palindromePermutation('joe shmo') // false
// palindromePermutation('h') // true
// palindromePermutation("aannhh") // true
// palindromePermutation('aab') // true


// Solution 2: Implement a character set. 
// If the set has a character then delete the character from the set
// If the set does not have a character then append the character to the set
// The algorithm will be inherently checking whether or not there are an even number of
// occurrences of a letter and deleting those characters from the set 
// Return the truth value of set.size <= 1
//  a set with 0 or 1 will be a permutation of a palindrome
// a set with size larger than 1 will not be a permutation of a palindrome

const palindromePermutation2 = (s) => {
    
    let str = s.replaceAll(' ','');
    let charSet = new Set();
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        if (charSet.has(char)){
            charSet.delete(char);
        } else {
            charSet.add(char);
        }
    }
    isPalindromePermutation = (charSet.size <= 1);
    console.log(isPalindromePermutation);
}

palindromePermutation2('hannah') // true
palindromePermutation2('taco cat') // true
palindromePermutation2('joe shmo') // false