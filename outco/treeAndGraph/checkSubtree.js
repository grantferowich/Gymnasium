/* 

CHECK SUBTREE

4.10

*/
class TreeNode{
    constructor(value=null){
        this.value = value;
        this.right = null;
        this.left = null;
    }   
}

/* T1 is longer
first, find the node in t1 which matches t2's root
second, call function to match each node in t2 with t1

*/

const checkSubtree = (t1, t2) => {
   
    if (t2 === null){
        return true;
    }

    const dfs = (node) => {
        if (!node){
            return null;
        }
        if (node.value === t2.value){
            return node
        }
        if (!node.left && !node.right){
            return 
        } 
        dfs(node.right)
        dfs(node.left)
    }
    
    let subRoot = dfs(t1)
    if (!subRoot){
        return false
    }

    const traverse = (node1, node2) => {
        if (node2 === null && node2 === null){
            return true
        }
        if (node1 === null || node2 === null){
            return false;
        }
        if (node1.value !== node2.value){
            return false;
        }
        return traverse(node1.right, node2.right) && traverse(node1.left, node2.left)
    }    
    return traverse(subRoot, t2)
}

/* TESTS */

const tree1 = new TreeNode(8);
tree1.left = new TreeNode(5);
tree1.right = new TreeNode(13);
tree1.left.left = new TreeNode(1);
tree1.left.right = new TreeNode(3);
tree1.right.left = new TreeNode(21);
tree1.right.right = new TreeNode(34);

const tree2 = new TreeNode(8)
tree2.left = new TreeNode(5)
tree2.right = new TreeNode(13)

const tree3 = new TreeNode(55)

const result1 = checkSubtree(tree1, tree2)
const result2 = checkSubtree(tree1, tree3)
console.log('result1', result1)
console.log('result2', result2)