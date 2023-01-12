/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University = awesome.';

words = "This function takes in two parameters, list1 and list2, which are assumed to be singly linked lists that are already sorted in ascending order. It performs the following steps: It creates a dummy node called dummy and initializes a variable called tail to this node. It enters a while loop that iterates as long as both list1 and list2 are truthy. In each iteration, it compares the value of the list1 and list2 head, if the value of the list1 is less than or equal to the value of list2 it sets the next property of the tail node to the list1 head and move list1 head to its next node, otherwise it sets the next property of the tail node to the list2 head and move list2 head to its next node. It updates the tail node with the current tail's next property. If the first list is empty and the second is not, it sets the tail's next property to list2.If the second list is empty and the first is not, it sets the tail's next property to list1. Finally, the function returns the dummy.next which is the merged and sorted linked list. This function is merging two already sorted linked lists into a new sorted linked list. It does so by iterating over both linked lists and comparing their current nodes values and appending the smaller of the two to the result. It makes use of dummy head and tail pointers to keep track of the merging. It's a simple O(n) solution where n is the total number of nodes in both lists."

const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    // Trim leading and trailing whitespace
    text = text.trim();
    return text;
}

console.log(cleanText(words));