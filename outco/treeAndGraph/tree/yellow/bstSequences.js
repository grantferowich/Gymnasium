/* 

UNTESTED
**

Suppose you have the binary tree:

             1
           /   \
          2     3

          The list of sequences to generate this tree could be
          [1,2,3] or [1,3,2]


*/


class TreeNode{
    constructor(value=null){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const bstSequences = () =>{
    
}
  
/* TESTS */
let t = new TreeNode(2)
t.left = new TreeNode(1)
t.right = new TreeNode(3)

let result = allSequences(t)
console.log(result)