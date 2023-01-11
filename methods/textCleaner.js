let words = 


const cleanText(text) {
    // Replace non-alphanumeric characters with space
    text = text.replace(/[^\w\s]/gi, ' ');
    // Convert to lowercase
    text = text.toLowerCase();
    // Replace multiple spaces with single space
    text = text.replace(/\s+/g, ' ');
    // Trim leading and trailing whitespace
    text = text.trim();
    return text;
}

let x = cleanText(words)

const generateRequest = (x) => {
    let intro = "could you please summarize the following function and return the time and space complexity: ";
    return intro + x;
}

console.log(generateRequest)