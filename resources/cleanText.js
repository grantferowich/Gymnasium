/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words ="This code defines a function called maxVowel that takes two parameters: a string s and an integer k. The function's purpose is to find the maximum number of vowels in any substring of length k in the given string s. The function initializes four variables: right, left, local, and ultimate. right and left are pointers that keep track of the current substring, local is a variable that counts the number of vowels in the current substring, and ultimate keeps track of the maximum number of vowels in any substring seen so far. The function then enters a while loop that runs until the right pointer reaches the end of the string s. Within the loop, the function checks if the current substring has length k. If the substring is longer than k, it moves the left pointer to the right and subtracts one from local if the character at that position is a vowel. If the substring is shorter than k, it moves the right pointer to the right and adds one to local if the character at that position is a vowel. After updating local, the function uses Math.max to update the value of ultimate to be the maximum of the current value of local and ultimate. Once the loop has completed, the function returns the value of ultimate, which represents the maximum number of vowels in any substring of length k in the string s."

const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim()
    return text;
}

console.log(cleanText(words));