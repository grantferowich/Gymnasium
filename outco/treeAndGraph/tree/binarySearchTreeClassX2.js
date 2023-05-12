/**
 *  Homework - Binary Search Tree
 *
 *  Defined on May 11, 2023.
 *  Successfully tested the function May 12, 2023.
 * 
 *  TreeNode class
 *  
 * 
 *  Prompt:    Create a TreeNode class
 *             The TreeNode class should contain the following properties:
 *
 *                   value:   integer value (default null)
 *                    left:   pointer to another node (initially null)
 *                   right:   pointer to another node (initially null)
 *
 *                 Example:   let sample = new TreeNode(1)
 *                            sample.value   // 1
 *                            sample.left    // null
 *                            sample.right   // null
 *
 *
 *  BinarySearchTree class.
 *
 *  Prompt:    Create a BinarySearchTree class
 *
 *             The BinarySearchTree class should contain the following
 *             properties:
 *
 *                    root:   A pointer to the root node (initially null)
 *                    size:   The number of nodes in the BinarySearchTree
 *
 *             The BinarySearchTree class should also contain the following
 *             methods:
 *
 *                  insert:   A method that takes takes an integer value, and
 *                            creates a node with the given input.  The method
 *                            will then find the correct place to add the new
 *                            node. Values larger than the current node node go
 *                            to the right, and smaller values go to the left.
 *
 *                            Input:     value
 *                            Output:    undefined
 *
 *                  search:   A method that will search to see if a node with a
 *                            specified value exists and returns true or false
 *                            if found.
 *
 *                            Input:     value
 *                            Output:    boolean
 *
 *
 *             What are the time and auxilliary space complexities of the
 *             various methods?
 *
 */

class TreeNode{
    constructor(valInt){
        this.valueInt = valInt === undefined ? null : valInt;
        this.leftInt = null;
        this.rightInt = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.rootInt = null;
        this.sizeInt = 0;
    }

    insert(valueInt){
        let insertionNodeInt = new TreeNode(valueInt);
        
        if (this.sizeInt === 0){
            this.rootInt = insertionNodeInt;
            this.sizeInt++
            return
        }

        const traverse = (nodeInt, insertNodeInt) => {

            if (insertNodeInt.valueInt < nodeInt.valueInt && nodeInt.leftInt === null){
                nodeInt.leftInt = insertNodeInt
                this.sizeInt++
                return
            }

            if (insertNodeInt.valueInt > nodeInt.valueInt && nodeInt.rightInt === null){
                nodeInt.rightInt = insertNodeInt;
                this.sizeInt++
                return
            }

            if (insertNodeInt.value < nodeInt.valueInt){
                traverse(nodeInt.leftInt, insertNodeInt);
            }

            if (insertNodeInt.value > nodeInt.valueInt){
                traverse(nodeInt.rightInt, insertNodeInt)
            }

        }
        traverse(this.rootInt, insertionNodeInt)
    }

    search(valueInt){
        if (this.rootInt.valueInt === valueInt){
            return true;
        }

        const traverse = (nodeInt, targetInt) => {
            if (nodeInt.valueInt === targetInt || nodeInt.leftInt.valueInt === targetInt || nodeInt.rightInt.valueInt === targetInt){
                return true
            }
            if (!nodeInt.value){
                return
            }
            
            if (nodeInt.valueInt < targetInt){
                return traverse(nodeInt.leftInt, targetInt)
            }
            if (nodeInt.valueInt > targetInt){
                return traverse(nodeInt.rightInt, targetInt)
            }

        }
        return traverse(this.rootInt, valueInt) !== undefined ? true : false
    }
}
// let root1Int = new TreeNode(5);
// root1Int.leftInt = new TreeNode(3);
// root1Int.rightInt = new TreeNode(8);

// console.log('Tree 1: ', root1Int)

let binarySearchTree1 = new BinarySearchTree();
binarySearchTree1.insert(5);
binarySearchTree1.insert(8);
binarySearchTree1.insert(2);
console.log('Binary Search Tree: ', binarySearchTree1);
let trueOrFalse1 = binarySearchTree1.search(8);
let trueOrFalse2 = binarySearchTree1.search(11);
console.log('True or false 1: ', trueOrFalse1);
console.log('True or false 2: ', trueOrFalse2);