/**
 * 108. Convert Sorted Array to Binary Search Tree
Easy
Given an integer array nums where the elements are sorted in ascending order, 
convert it to a height-balanced binary search tree.

Example 1:

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also acceptable. 

Example 2:

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 * 
 *  The array is sorted, so we could use binary search. 
 *  The value at the middle index will work for the root. 
 *  */

class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

let fibArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const sortedArrayToBST = (array) => {
    let middleIndexInt = parseInt(array.length/2);
    let leftArr = array.slice(0, middleIndexInt);
    let rightArr = array.slice(middleIndexInt, array.length-1);
    let rootValueInt = array[middleIndexInt];
    let rootNode = new TreeNode(rootValueInt);
    rootNode.left = new TreeNode(array[middleIndexInt - 1]);
    rootNode.right = new TreeNode(array[middleIndexInt + 1]);
    let xInt = leftArr.length-1;
    // while traversing left, if value is less and left is null, insert
                        //  , if value is greater and right is null, insert 
    const traverse = (node) => {
        if (node.value === null){
            return
        }
        
    }
    traverse(rootNode.left, middleIndexInt - 2, middleIndexInt - 3)


}
