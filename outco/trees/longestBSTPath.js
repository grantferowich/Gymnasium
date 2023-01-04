


// while node !== null
// if node.next !== null 
// longest = 1


// the longest path may be reached by continuing to go left until a leaf is reached 
// a leaf being defined as a node whose next value is null
// go left over and over leaf
// go right over and over until lead
// return the largest of the two counts 


class Node{
 constructor(value) {
   this.value = value,
   this.left = null,
   this.right = null
 }
}

const findLongestPath = (head) => {
    let root = new Node(head)
    while (node !== null){
    let left = findLongestPath(node.left);
    let right = findLongestPath(node.right);
    let max = Math.max(left, right);
 }
}