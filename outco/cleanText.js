/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words = "This function takes a binary tree as an input and performs a Breadth-first Search (BFS) traversal on it, returning an array of the values of each node in the tree in the order they were visited. It starts by initializing an empty array called 'queue' and an empty array called 'result'. It pushes the root of the tree into the queue. If the root is null, the function returns an empty result array. It then enters a while loop that continues until the queue is empty. It takes the first element of the queue and assigns it to a variable called 'current'. It then pushes the value of the current node into the result array. If the current node has a left child, it pushes it into the queue. If the current node has a right child, it pushes it into the queue. This continues until all nodes in the tree have been visited, and their values have been added to the result array. The function returns the result array which contains the values of the nodes in the tree in the order they were visited using BFS."


const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim();
    return text;
}

console.log(cleanText(words));