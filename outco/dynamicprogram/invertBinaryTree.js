// The problem statement
// invert a binary tree so that all of the elements on the right are on the left and all of the elements on the right are on the left

// Constraints: 
// Time Complexity: O(N)
// Space Complexity: O(N)

// Input: a binary tree node
// Image: https://camo.githubusercontent.com/5d6e2017cdf3cbf184fd541952482c698368ddf0f325b112c8a463996517a0c4/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f6f7574636f2d696f2f696d6167652f75706c6f61642f76313532313234383032362f496e7665727442696e61727954726565312e706e67

// output: a binary tree node
// Image: https://camo.githubusercontent.com/c39906321ffc9e87d228613e33cf29715ee9f069b70284f3e99d34a0be23bf76/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f6f7574636f2d696f2f696d6167652f75706c6f61642f76313532313234383032362f496e7665727442696e61727954726565322e706e67


// the root will point at a left node and a   right node
// left node will be stored in a var
// the right node will be stored in a var

// 
//              => 4    
//       1 => 2 =>3
//         => 5
// Initial:      
//          1
//         / \
//        5   2
//           / \
//          3   4

// Inverted 
//           1
//          / \
//         2   5
//        / \
//       4   3

// node.value = 1
// tempX = node.left = 5
// tempY = node.right = 2
// node.right = tempX
// node.left = tempY

// termination condition:
// node.left and node.right are null 

const invertTree = (node) => {
    let root = node;
  
    const invert = (node, depth) => {
        if ((node.left === null) && (node.right === null)){
          return 
        }
  
        let tempX = node.left;
        let tempY = node.right;
        node.right = tempX;
        node.left = tempY;
        invert(node.left, depth + 1)
        invert(node.right, depth + 1)
    }
    invert(root);
  
    return root
  }
  
  
  
  
  
  