/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words = 'Can you describe the company culture and how it relates to software development? How is the technology team structured and what is the role of a software engineer in the team? Can you give an example of a particularly interesting or challenging project the technology team has worked on recently?'
const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim()
    return text;
}

console.log(cleanText(words));