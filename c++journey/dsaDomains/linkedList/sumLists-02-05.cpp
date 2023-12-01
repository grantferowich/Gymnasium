/* 
 * Grant Ferowich
 * Developed Monday Oct 9, 2023
 * Cracking the Coding Interview
 * Chapter 2, question 5: Sum Lists
 * * *
 * input1 
 * integer1  = { 7, 1, 6 } OR 617
 * integer2 = { 5, 9, 2 } OR 295
 * Output1 = { 2, 1, 9} OR 912
 * What is at the head is always the 1s place. when 6 is appended to
 * list 1, 6 is in the 1's place; wheen 1 is appended to list 1, 1 is in the 1's place.
 * 
 * You have two numbers represented by a linked list,
 * where each node contains a single digit. The digits are
 * are stored in reverse order, such that the 1's digit
 * is at the head of the list. Write a function that adds
 * the two numbers and returns the sum as a linked list. 
 * (You are not allowed to "cheat" and just convert the linked
 * list to an integer.)
 *
 * Input: Linked list
 * Output: Linked list
 * Constraints: 
 * Edge: 
 *
 * Time complexity: O(k) where k is the number of nodes in the 
 * longest linked list of the input linked lists.
 * Space complexity: O(N) where N is proportional to the largest number of nodes 
 * among the linked list inputs.
 *
 * 
 */

#include <cstddef>
#include <iostream> 
#include <forward_list>
#include <iterator>
using namespace std;

/* 
 * Input 1 
 * integer1  = { 7, 1, 6 } OR 617
 * integer2 = { 5, 9, 2 } OR 295
 * Output1 = { 2, 1, 9} OR 912 

 * Input 2
 * listA = { 0, 0, 9 };
 * listB = { 4 };
 */


class Solution{
    public: 
    forward_list<int> add(forward_list<int> list1, forward_list<int> list2, forward_list<int> finalList, int carryInt){
        auto it1 = list1.end();
        auto it2 = list2.end();
        while (it1 != list1.before_begin() || it2 != list2.before_begin()){
            size_t int1 = (it1 != list1.before_begin()) ? *it1 : 0;
            size_t int2 = (it2 != list2.before_begin()) ? *it2 : 0;
            int sumInt = int1 + int2 + carryInt;
            int finalInt = sumInt % 10;
            finalList.push_front(finalInt);
            if (it1 != list1.before_begin()){
                --it1;
            }
            if (it2 != list2.before_begin()){
                --it2;
            }
            if (sumInt > 10){
                carryInt = 1;
            }
        }
        return finalList;
    }

    forward_list<int> sumLists(forward_list<int> list1, forward_list<int> list2){
        int carryInt = 0;
        auto it = list1.begin();
        forward_list<int> finalList;
        return add(list1, list2, finalList, carryInt);
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
    forward_list<int> list1;
    list1.push_front(6);
    list1.push_front(1);
    list1.push_front(7);
    forward_list<int> list2;
    list2.push_front(2);
    list2.push_front(9);
    list2.push_front(5);
    forward_list<int> outputList1 = solutionX.sumLists(list1, list2);
    printForwardList(outputList1);
    return 0;
}