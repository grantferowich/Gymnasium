/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words = "This function adds a new node to a skip list data structure. It starts by initializing an array called 'update' with the same length as the current level of the skip list and all its elements set to null. Then it creates a variable called 'current' that points to the head of the skip list. The function loops through all the levels of the skip list, starting from the highest level, and for each level, it loops through all the nodes in that level and keeps moving forward until it finds a node with a key that is greater than or equal to the key being inserted. At each iteration of the inner loop, it assigns the current node to the corresponding position in the 'update' array. After the outer loop completes, the 'current' variable now points to the node which has the key either equal or immediately greater than the key being inserted. The function then checks if the key of the current node matches the key being inserted, if it does, it updates the value of the current node with the new value and returns. If the key is not found, it generates a random level using the randomLevel function and if the random level generated is greater than the current level of the skip list, it updates the 'update' array with the head node for all the levels greater than the current level and updates the current level of the skip list with the new level. Finally, it creates a new node using the SkipListNode class, and for each level, it updates the forward pointer of the corresponding node in the 'update' array to point to the new node and the forward pointer of the new node to point to the next node."




const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim();
    return text;
}

console.log(cleanText(words));