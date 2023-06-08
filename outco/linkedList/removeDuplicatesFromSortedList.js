/* 

83. Remove Duplicates from Sorted List
Easy

Started the function on Saturday, June 3, 2023 at 5pm.
URL: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

Given the head of a sorted linked list, 
delete all duplicates such that each 
element appears only once. Return the
linked list sorted as well.

Example 1
headList = [ 1, 1, 2]
output = [ 1, 2]

Example 2
headlist = [ 1, 1, 2, 3, 3]
output = [ 1 , 2, 3]

Psuedocode 
Step 1. Maintain a frequency map<Int, FrequencyInt>
Step 2. Fill the frequency map with integers and frequencies.
iterate over the list
 -> if the frequency is greater than 0
 then delete the node, update the frequency map
 -> if the frequency is 0, then continue the iteration

 1 - 1 - 2
 {1: 1,
  2: 0}

How will you delete a node? 
Store the next node's value as tempInt.
Store the next node's next node as nextNodeInt.
Set the current node's value to tempInt. 
Set the current node's next property to nextNodeInt.

*/
