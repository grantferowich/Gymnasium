/**
 *  Homework - Binary Search Tree
 *  Developed on August 17, 2023.
 *  Problem 1: TreeNode class
 *
 *  Prompt:    Create a TreeNode class
 *             The TreeNode class should contain the following public properties:
 *
 *                   value:   {Integer}
 *                    left:   {TreeNode} (initially NULL)
 *                   right:   {TreeNode} (initially NULL)
 *
 *                 Example:   var TreeNode sample = new TreeNode(1)
 *                            sample->value        // 1
 *                            sample->left         // NULL
 *                            sample->right        // NULL
 *
 *
 *  Problem 2: BinarySearchTree class.
 *
 *  Prompt:    Create a BinarySearchTree class
 *
 *             The BinarySearchTree class should contain the following public
 *             properties:
 *
 *                    root:   {TreeNode} (initially NULL)
 *                    size:   {Integer}
 *
 *             The BinarySearchTree class should also contain the following
 *             public methods:
 *
 *                  insert:   A method that takes takes an integer value, and
 *                            creates a node with the given input.  The method
 *                            will then find the correct place to add the new
 *                            node. Values larger than the current node node go
 *                            to the right, and smaller values go to the left.
 *
 *                            Input:     {Integer}
 *                            Output:    {Void}
 *
 *                  search:   A method that will search to see if a node with a
 *                            specified value exists and returns true or false
 *                            if found.
 *
 *                            Input:     {Integer}
 *                            Output:    {Boolean}
 */

#include <typeinfo>
#include <iostream>
using namespace std;

class TreeNode {
  public:
    int valueInt;
    TreeNode *leftNode;
    TreeNode *rightNode;

    TreeNode(int inputInt) {
      this->valueInt = inputInt;
      this->leftNode = nullptr;
      this->rightNode = nullptr;
    }
};

class BinarySearchTree {
  public:
    TreeNode *rootNode;
    int sizeInt;

    BinarySearchTree() {
      this->rootNode =  nullptr;
      this->sizeInt = 0;
    }

    void traverseAndInsert(TreeNode *insertionNode,TreeNode *node){
        if (insertionNode->valueInt < node->valueInt && node->leftNode == nullptr){
            node->leftNode = insertionNode;
            this->sizeInt++;
            return;
        }
        if (insertionNode->valueInt > node->valueInt && node->rightNode == nullptr){
            node->rightNode = insertionNode;
            this->sizeInt++;
            return;
        }
        if (insertionNode->valueInt < node->valueInt){
            traverseAndInsert(insertionNode, node->leftNode);
        } else {
            traverseAndInsert(insertionNode, node->rightNode);
        }
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    void insert(int valueInt) {
        TreeNode *xNode = new TreeNode(valueInt);
        TreeNode *node = this->rootNode;
        if (sizeInt == 0){
            this->rootNode = xNode;
            this->sizeInt++;
            return;
        } 
        traverseAndInsert(xNode, node);
    }

    bool traverseAndSearch(int searchInt, TreeNode *node){
            if (node == nullptr){
                return false;
            }
            if (searchInt == node->valueInt){
                return true;
            }
            bool leftToF = traverseAndSearch(searchInt, node->leftNode);
            bool rightToF = traverseAndSearch(searchInt, node->rightNode);
            return leftToF || rightToF;
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    bool search(int valueInt) {
        TreeNode *node = this->rootNode;
        bool resultToF = traverseAndSearch(valueInt, node);
        return resultToF;
    }
};

void printInOrder(TreeNode *node, const string& positionStr) {
        if (node == nullptr) {
            return;
        }
        printInOrder(node->leftNode, "Left: ");
        cout << positionStr << node->valueInt << ". " << endl;
        printInOrder(node->rightNode, "Right: ");
};

string printToFToString(bool inputToF){
        if (inputToF == 1){
            return "true.";
        }
        if (inputToF == 0){
            return "false.";
        }
        return "false";
}

int main(){
    BinarySearchTree binarySearchTreeX;
    binarySearchTreeX.insert(8);
    binarySearchTreeX.insert(5);
    binarySearchTreeX.insert(13);
    binarySearchTreeX.insert(23);
    bool searchToF1 = binarySearchTreeX.search(13); 
    string searchStr1 = printToFToString(searchToF1);
    cout << "The binary search tree has 13: " << searchStr1 << endl; // expect true
    bool searchToF2 = binarySearchTreeX.search(24);
    string searchStr2 = printToFToString(searchToF2);
    cout << "The binary search tree has 23: " <<  searchStr2 << endl; // expect false
    printInOrder(binarySearchTreeX.rootNode, "Root: ");
    return 0;
}