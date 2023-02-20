/* 

MINIMAL TREE

CTCI 4.2

Input: sorted array
Output: a BST with minimal height

*/

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


const minimalTree = (nums) =>{
    if (nums === undefined || nums === null || nums.length === 0){ return} 
    const createMinimalBST = (array, start, end) => {
        if (end < start){return null}
        let mid = parseInt((end + start)/2);
        let node = new TreeNode(array[mid]);
        node.left = createMinimalBST(array, start, mid-1)
        node.right = createMinimalBST(array, mid+1, end)
        return node
    }   
    return createMinimalBST(nums, 0, nums.length -1)
}

/* TESTS */

const input0 = [];
const output0 = minimalTree(input0)
console.log(output0) // undefined

const inputUndefined = undefined;
const outputUndefined = minimalTree(inputUndefined)
console.log(outputUndefined) // undefined

const inputNull = null
const outputNull = minimalTree(inputNull)
console.log(outputNull) // undefined

const input1 = [0,1,2,3];
const output1 = minimalTree(input1)
console.log(output1)

const input2 = [0,1,2,3,4,5,6,7,8,9,10];
const output2 = minimalTree(input2)
console.log(output2)
