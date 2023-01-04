


// while node !== null
// if node.next !== null 
// longest = 1


// the longest path may be reached by continuing to go left until a leaf is reached 
// a leaf being defined as a node whose next value is null
// go left over and over leaf
// go right over and over until lead
// return the largest of the two counts 


class BinaryTreeNode{
    constructor(value) {
    this.value = value,
    this.left = null,
    this.right = null
  }
}

// input: head of bst
// output: number

const findLongestPath = (head) => {
    let node = head;
    
    while (node){
    const left = findLongestPath(node.left);
    const right = findLongestPath(node.right);
    return max = Math.max(left, right);
    }
    
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(17);
