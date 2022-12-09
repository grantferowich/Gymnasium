// https://camo.githubusercontent.com/1053d5594686b4bb44fda5229cac6e619cdc3e4d08a55032d99a122e62aee416/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f6f7574636f2d696f2f696d6167652f75706c6f61642f76313532313234383032362f4c6f77657374436f6d6d6f6e416e636573746f722e706e67
// Input: a root, int value1, int, value2, int
// output: value, int
// Initial
//      
// Example: 5, 4, 9 
//
/*

216 - Lowest Common Ancestor
Given the root node of a binary tree and two distinct values, find the lowest common ancestor.

Input: Root Node, Two Integer Values
Output: Integer Value of Lowest Common Ancestor

Example
Input: root, 4, 9 => Output: 7

Image:
https://camo.githubusercontent.com/1053d5594686b4bb44fda5229cac6e619cdc3e4d08a55032d99a122e62aee416/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f6f7574636f2d696f2f696d6167652f75706c6f61642f76313532313234383032362f4c6f77657374436f6d6d6f6e416e636573746f722e706e67

Diagram 
          5  depth = 0 
         / \
        2   7 yes // step 2: return true since node is common depth= 1
           / \
          4   8 no // step 1 depth = 2 
               \ 
                9 start, depth = 3

  base case: return the root node
  if sharedParentNode !== rootNode 
    return sharedParentNode
  
  input: 5, 4, 9 
  
  input: 5, 2, 8
  expect: 5 

  state variables
  return variables
  helper method
  recursive case
  base case 

  the path from the root to 4: 5, 7, 4
  the path from the root to 9: 5, 7, 8, 9 


  1. traverse from root to value 1, storing values in an array
  2. traverse from root to value 2, storing values in an array
  for loop over path1Array
    if (!(path1Array[i] === path2Array[i])){
      return path1Array[i];
    }
    
  
*/

// JavaScript

// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// DO NOT EDIT
// generate tree from array
function deserialize(arr) {
	if (arr.length === 0) {
		return null;
	}
	let root = new TreeNode(arr[0]);
	let queue = [root];
	for (let i = 1; i < arr.length; i += 2) {
		let current = queue.shift();
		if (arr[i] !== null) {
			current.left = new TreeNode(arr[i]);
			queue.push(current.left);
		}
		if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
			current.right = new TreeNode(arr[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
}

// DO NOT EDIT
const arr = [5, 2, 7, null, null, 4, 8, null, null, null, 9];

const sampleTree = deserialize(arr);

const lowestCommonAncestor = (root, num1, num2) => {
    let common = null;
    let array1 = [];
    let array2 = [];
    let path = []

    const findAncestor = (node) => {
        if (node == null){ return }
        path.push(node.value)

        if ( node.value === num1){
            array1 = path.slice()
        }

        if (node.value === num2){
            array2 = path.slice()
        }

        findAncestor(node.left);
        findAncestor(node.right);
        path.pop()
    }

    findAncestor(root);

    for (let i = 0; i < array1.length; i++){
        if (array1[i] == array2[i]){
            common = array[i];  
        } else {
            return 
        }
    }
    return common 
};

// Devised solution 12/8/22. Solution was untested as of 12/8/22.

