/* 

CHECK SUBTREE

4.10
Successfully tested the function 2/26/23.


/* T1 is longer
first, find the node in t1 which matches t2's root
second, call function to match each node in t2 with t1

// [3,4,5,1,2,null,null,null,null,0]
            3
          /  \ 
         4    5
        / \  
       1  2
         /
        0
*/


class TreeNode{
    constructor(value=null){
        this.value = value;
        this.right = null;
        this.left = null;
    }   
}

const deserialize = (array) => {
    if (array.length == 0){
        return null;
    }
    // instantiate tree from the 0th element
    // 0th array element becomes the root of the tree
    let root = new TreeNode(array[0]);
    let queue = [root];
    for (let x = 1; x < array.length; x += 2){
        let current = queue.shift()
        if (array[x] !== null){
            current.left = new TreeNode(array[x]);
            queue.push(current.left)
        }
        if (array[x + 1] !== null && array[x+1] !== undefined){
            current.right = new TreeNode(array[x+1]);
            queue.push(current.right)
        }
    }
    return root;
}

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
        return dfs(node.right) || dfs(node.left)
    }
    
    let subRoot = dfs(t1)
    if (!subRoot){
        return false
    }

    const traverse = (node1, node2) => {
        if (!node1 || !node2){
            return node1 === node2
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

const tree2 = new TreeNode(8)
tree2.left = new TreeNode(5)
tree2.right = new TreeNode(13);

const tree3 = new TreeNode(55)

const largeTree4 = deserialize([3,4,5,1,2,null,null,null,null,0])
const smallTree4 = deserialize([4,1,2])

const largeTree5 = deserialize([3,4,5,1,2])
const smallTree5 = deserialize([4,1,2])



const result1 = checkSubtree(tree1, tree2) // true
const result2 = checkSubtree(tree1, tree3)  // false
const result3 = checkSubtree(largeTree4, smallTree4) // false 
const result4 = checkSubtree(largeTree5, smallTree5) // true
console.log('result1', result1)
console.log('result2', result2)
console.log('result3', result3)
console.log('result4', result4) 