/* 

214 - Invert a Binary Tree
Given a binary tree root node, invert the binary tree (mirror) and return back the root node.

Attempted May 14, 2023.

Input: Node in a Binary Tree
Output: Node in a Binary Tree
Example
Input: InvertBinaryTree1
             1
           /  \ 
         2      3
              /  \
             4    5

Output: InvertbinaryTree2
            1
          /  \
        3     2
      /  \
     5    4 

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)

*/

class TreeNode{
    constructor(valueInt){
        this.valueInt = valueInt === undefined ? null : valueInt;
        this.leftInt = null;
        this.rightInt = null;
    }
}

const invertABinaryTree = (rootNodeInt) => {
    
    const traverse = (nodeInt) => {
        if (nodeInt === null || nodeInt.valueInt === null){
            return 
        }
        let tempRightInt = nodeInt.rightInt;
        let tempLeftInt = nodeInt.leftInt;
        nodeInt.rightInt = tempLeftInt;
        nodeInt.leftInt = tempRightInt;
        traverse(nodeInt.rightInt);
        traverse(nodeInt.leftInt);
    }

    traverse(rootNodeInt)
    return rootNodeInt
}

/* Test */
let binaryTree1 = new TreeNode(1)
binaryTree1.rightInt = new TreeNode(3)
binaryTree1.leftInt = new TreeNode(2)

let binaryTree2 = new TreeNode(1);
binaryTree2.rightInt = new TreeNode(3);
binaryTree2.leftInt = new TreeNode(2);
binaryTree2.rightInt.rightInt = new TreeNode(5)
binaryTree2.rightInt.leftInt = new TreeNode(4)


const resultBinaryTree1 = invertABinaryTree(binaryTree1);
const resultBinaryTree2 = invertABinaryTree(binaryTree2)

console.log('Result 1:', resultBinaryTree1)
console.log('Result 2:', resultBinaryTree2)

/* Test results 

Result 1: TreeNode {
  valueInt: 1,
  leftInt: TreeNode { valueInt: 3, leftInt: null, rightInt: null },
  rightInt: TreeNode { valueInt: 2, leftInt: null, rightInt: null }
}

Result 2: TreeNode {
  valueInt: 1,
  leftInt: TreeNode {
    valueInt: 3,
    leftInt: TreeNode { valueInt: 5, leftInt: null, rightInt: null },
    rightInt: TreeNode { valueInt: 4, leftInt: null, rightInt: null }
  },
  rightInt: TreeNode { valueInt: 2, leftInt: null, rightInt: null }
}
*/