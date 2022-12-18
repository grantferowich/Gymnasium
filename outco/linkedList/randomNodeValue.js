/* 
214 - Random Node Value from Linked List
Given the head node of a singly linked list, return the value of one of the nodes at random from the linked list.

The node value that is returned must be fairly random. How can we test this out?

Example
       (1) -> (5) -> (7) -> (10)
        ^
        |
Input: (1)
Output: 5

// If we were to call the function on the above linked list 100 times, we would
// expect the frequency of each node value to return approximately 25 times.
// Should resemble:

{
  1: 25
  5: 25
  7: 25
  10: 25
} 

*/