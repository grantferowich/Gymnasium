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

void printInOrder(TreeNode *node) {
        if (node == nullptr) {
            return;
        }
        printInOrder(node->leftNode);
        cout << node->valueInt << " ";
        printInOrder(node->rightNode);
};