/* 


// while node !== null
// if node.next !== null 
// longest = 1


// the longest path may be reached by continuing to go left until a leaf is reached 
// a leaf being defined as a node whose next value is null
// go left over and over leaf
// go right over and over until lead
// return the largest of the two counts 


    Suppose the binary tree is:
                            
                1
               / \
             2    3
                   \ 
                   4

The longest path in this tree is 3. 
 */
class BinaryTreeNode{
    constructor(value) {
    this.value = value === undefined ? null : value
    this.left = null,
    this.right = null
  }
}

// input: head of bst
// output: number

// time complexity: O(N) in the worst case
// space complexity: O(N) since there may be N calls on the call stack at a given point in time
const findLongestPath = (head) => {
    if (head === null){
        return 0
    }
    const leftPath = findLongestPath(head.left);
    const rightPath = findLongestPath(head.right);
    return Math.max(leftPath, rightPath) + 1;
}


const root = new BinaryTreeNode(1)
root.left = new BinaryTreeNode(2)
root.right = new BinaryTreeNode(3)
root.right.right = new BinaryTreeNode(4) 
console.log(findLongestPath(root))

// suppose you had an input like this:
// [ 1, 2, 3, 4, -1, -1, -1 ]