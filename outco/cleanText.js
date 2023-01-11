/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University = awesome.';

words = "This function takes in a node and an integer n as its parameters. It performs the following steps: It creates a dummy node called dummy, which serves as a placeholder and it sets its next property to the input node. It initializes a variable length to 0, and another variable current to the input node. It enters a while loop that iterates as long as current is truthy, and in each iteration it increments length and sets current to the next property of the current current node. The while loop ends when current becomes falsy, which means all the next properties of the node is null, thus has been reached the end of linked list. if length is 1, the function sets the next property of dummy to null. it sets current to the input node again and calculates target as length - n. The function then enters a for loop that iterates from 0 to target and in each iteration, it checks if x is equal to target - 1. If it is, it sets the next property of the current current's next property to the next property of the current current's next property. Regardless of the if statement it sets current to the current's next property. Finally the function returns dummy.next which is the input node with the nth node from the end of the linked list removed. This function is removing the nth node from the end of a singly linked list, it does so by first calculating the length of the linked list using a while loop, then using another loop to iterate over the list and stopping at the node that is n nodes away from the end."


const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim();
    return text;
}

console.log(cleanText(words));