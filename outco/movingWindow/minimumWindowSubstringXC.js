const minimumWindowSubstring = (word, target) => {
    // Initialize the left pointer
    let left = 0;
    // Initialize the right pointer
    let right = 0;
    // Initialize the result with [0, Infinity]
    let result = [0, Infinity];

    // Create an object to store the count of characters in the target
    const counts = {};
    // Initialize the number of missing characters
    let missingChars = target.length;

    // Loop through the target to create the counts object
    for (let i = 0; i < target.length; i++){
        let char = target[i];
        counts[char] = counts[char] + 1 || 1;
    }

    // Loop through the word with the right pointer
    while (right < word.length) {
        // If there are still missing characters
        if (missingChars > 0) {
            // Get the character at the right pointer
            let rChar = word[right];
            // If the character is in the counts object
            if (rChar in counts) {
                // Decrement the count of the character in the counts object
                if (counts[rChar] > 0){
                    missingChars--;
                }
                counts[rChar]--;
            }
        }

        // If all the target characters have been found
        while (missingChars === 0){
            // If the current substring is smaller than the current result
            if ((right - left) < (result[1] - result[0])){
                // Update the result
                result = [left, right];
            }
            // Get the character at the left pointer
            let lChar = word[left];
            // If the character is in the counts object
            if (lChar in counts) {
                // Increment the count of the character in the counts object
                counts[lChar]++;
                // If the count of the character is greater than 0
                if (counts[lChar] > 0){
                    missingChars++ 
                }
            }
            // Move the left pointer to the right
            left++;
        }
        // Move the right pointer to the right
        right++;       
    }

    // If the result's end is Infinity, return an empty string
    if (result[1] === Infinity) {
        return "";
    } else {
        // Return the minimum window substring
        return word.slice(result[0], result[1] +1)
    }
}
