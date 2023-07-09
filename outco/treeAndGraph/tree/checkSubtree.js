/* 

CHECK SUBTREE

CTCI 4.10
Successfully tested the function 2/26/23.
Successfully tested the function on Leetcode on July 8, 2023. 
Leetcode 572

/* T1 is longer
first, find the node in t1 which matches t2's root
second, call function to match each node in t2 with t1

largeTree1:
// [3,4,5,1,2,null,null,null,null,0]
            3
          /  \ 
         4    5
        / \  
       1  2
         /
        0
smallTree1: 
    4
   / \
  1   2


  LargeTree2:
     1
    /
   1
SmallTree
   

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
    let nodeList = []
    let output;
    const dfs = (node) => {
        if (!node){
            return null;
        }
        if (node.value === t2.value){
            nodeList.push(node)
        }
        if (!node.left && !node.right){
            return 
        } 
        return dfs(node.right) || dfs(node.left)
    }
    
    dfs(t1)
    if (nodeList.length === 0){
        return false
    }

    const isSubtree = (node1, node2) => {

        if (!node2){
            return node1 === node2
        }

        if (!node1){
            return false
        }

        if (node1.value !== node2.value){
            return false;
        }

        let right = isSubtree(node1.right, node2.right)
        let left = isSubtree(node1.left, node2.left)
        return right && left ? output = true : output = false
    }   

    for (let x = 0; x < nodeList.length; x++){
        let node = nodeList[x]
        if (isSubtree(node, t2)){
            break
        }
    }
    return output
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

const largeTree6 = deserialize([1,1])
const smallTree6 = deserialize([1])

const largeTree7 = deserialize([-1,-4,8,-6,-2,3,9,null,-5,null,null,0,7])
const smallTree7 = deserialize([3,0,5848])



const result1 = checkSubtree(tree1, tree2) // true
const result2 = checkSubtree(tree1, tree3)  // false
const result3 = checkSubtree(largeTree4, smallTree4) // false 
const result4 = checkSubtree(largeTree5, smallTree5) // true
const result5 = checkSubtree(largeTree6, smallTree6) // true
const result6 = checkSubtree(largeTree7, smallTree7) // false
console.log('result1', result1)
console.log('result2', result2)
console.log('result3', result3)
console.log('result4', result4) 
console.log('result5', result5)  
console.log('result6', result6)  