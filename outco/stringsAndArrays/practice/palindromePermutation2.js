// Solution 2: Implement a character set. 
// If the set has a character then delete the character from the set
// If the set does not have a character then append the character to the set
// The algorithm will be inherently checking whether or not there are an even number of
// occurrences of a letter and deleting those characters from the set 
// Return the truth value of set.size <= 1
// a set with 0 or 1 will be a permutation of a palindrome
// a set with size larger than 1 will not be a permutation of a palindrome
//

// tact coa => true: taco cat, atco cta
// hannah => true, hannah, nahhan

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
    return isPalindromePermutation;
}

module.exports = palindromePermutation2