/**
 *  Homework - Binary Search Tree
 *
 *  TreeNode class
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
 *             What are the time and auxilliary space complexities of the
 *             various methods?
 *
 */

class TreeNode{
    constructor(valueInt){
        this.valueInt = valueInt === undefined ? null : valueInt;
        this.rightInt = null;
        this.leftInt = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.rootInt = null;
        this.sizeInt = 0;
    }

    // time complexity: O(log(N))
    // input: int
    // output: undefined
    insert(valueInt){
        let insertionNodeInt = new TreeNode(valueInt)
        if (this.sizeInt === 0){
            this.rootInt = insertionNodeInt;
            this.sizeInt++;
            return;
        }

        const traverse = (nodeInt) => {

            if (valueInt <= nodeInt.valueInt && nodeInt.leftInt === null){
                nodeInt.leftInt = insertionNodeInt;
                this.sizeInt++
                return;
            }

            if (valueInt > nodeInt.valueInt && nodeInt.rightInt === null){
                nodeInt.rightInt = insertionNodeInt;
                this.sizeInt++;
                return 
            }
            
            if (valueInt > nodeInt.valueInt){
                traverse(nodeInt.rightInt);
            }
            if (valueInt < nodeInt.valueInt){
                traverse(nodeInt.leftInt);
            }
        }

        traverse(this.rootInt)
    }

    // run time: O(log(N))
    // input: int
    // outout: true or false
    search(valueInt){
        if (valueInt === null && this.rootInt === null){
            return true
        }

        const traverse = (nodeInt) => {
        
            // destination
            if (nodeInt.valueInt === valueInt){
                return true;
            }

            // recursive case 1
            if (valueInt <= nodeInt.valueInt && nodeInt.leftInt !== null){
                return traverse(nodeInt.leftInt);
            }

            // recursive case 2
            if (valueInt > nodeInt.valueInt && nodeInt.rightInt !== null){
                return traverse(nodeInt.rightInt);
            }
        }
        return traverse(this.rootInt) !== undefined ? true : false
    }
}

/* Test */

// let rootNodeInt = new TreeNode(7);
// rootNodeInt.leftInt = new TreeNode(5);
// rootNodeInt.rightInt = new TreeNode(8);

let rootNodeInt = new BinarySearchTree();
rootNodeInt.insert(7)
console.log(rootNodeInt) // successfully tested TreeNode(iInt)
rootNodeInt.insert(11)
console.log(rootNodeInt) // successfully tested TreeNode(iInt)
rootNodeInt.insert(13)
console.log(rootNodeInt) // successfully tested TreeNode(iInt)
rootNodeInt.insert(5)
console.log(rootNodeInt) // successfully tested TreeNode(iInt)
/* Test result */
// console.log(rootNodeInt) // successfully tested TreeNode(iInt)
const trueOrFalse1 = rootNodeInt.search(5)  
const trueOrFalse2 = rootNodeInt.search(55) 
console.log(`Result 1: ${trueOrFalse1}`) // expect true
console.log(`Result 2: ${trueOrFalse2}`) // expect false