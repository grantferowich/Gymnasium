/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words = ""

const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim()
    return text;
}

console.log(cleanText(words));