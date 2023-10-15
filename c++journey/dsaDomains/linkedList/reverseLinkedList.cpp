/* 
 * Grant Ferowich 
 * Developed Friday, October 13, 2023 at 3:28 CT.
 * 
 * Reverse a linked list
 * Given a forward list input return the list in reverse order.
 * The list must be sorted in place, meaning the space complexity
 * of the function is O(1).
 * Example 1:  Input: 3 - 6 - 8 - 14
 *             Output: 14 - 8 - 6 - 3
 *

 */

 #include <iostream>
 #include <forward_list>
 using namespace std;
 
 class Solution{
    public: 
    forward_list<int> reverseLinkedList(forward_list<int> inputList){
        auto currentNode = inputList.begin();
        auto nextNode = next(currentNode);
        auto previousNode = inputList.before_begin();
        // 4 - 7 - 9 
        while (nextNode != inputList.end()) {
            inputList.erase_after(previousNode);
            inputList.push_front(*currentNode);
            currentNode = nextNode;
            advance(nextNode, 1);
        }
        return inputList;
    }
 };

 void printForwardList(forward_list<int> list1){
       auto it = list1.begin();
       cout << "{ ";
       while (it != list1.end()){
        cout << *it;
        if (++it != list1.end()){
            cout <<  ", ";
        }
       }
        cout << " }" << endl;
    }

 int main(){
    Solution solutionX;
    forward_list<int> list1 = { 3, 5, 8, 13 };
    forward_list<int> list2 = solutionX.reverseLinkedList(list1);
    printForwardList(list2);
    return 0;
 }