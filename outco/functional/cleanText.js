/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words ="The function containsPermutation takes two strings as input (str1 and str2) and returns a boolean value indicating whether str2 contains any permutation of str1. The function first creates a Map idealMap that stores the frequency of each character in str1. Then, it initializes a fixed-size window of length equal to the length of str1 from the beginning of str2. It checks if the characters in the window are present in the idealMap, and if so, it decrements the frequency count of that character in the idealMap. It also keeps track of the number of permutations remaining (permutationsInt), which is initially set to the length of str1. The function then slides the window one character at a time from left to right over str2. For each new character, it updates the frequency count in idealMap accordingly. If the character being evicted from the left end of the window is present in idealMap, it increments the frequency count of that character in idealMap. It also updates the permutationsInt value based on the changes made to idealMap. The function returns true if permutationsInt becomes zero at any point during the sliding of the window, indicating that a permutation of str1 is present in str2. Otherwise, it returns false."
const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim()
    return text;
}

console.log(cleanText(words));