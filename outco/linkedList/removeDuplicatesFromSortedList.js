/* 

83. Remove Duplicates from Sorted List
Easy

Started the function on Saturday, June 3, 2023 at 5pm.

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
Maintain a frequency map<Int, FrequencyInt>
iterate over the list
 -> if the frequency is greater than 0
 then delete the node, update the frequency map
 


*/
