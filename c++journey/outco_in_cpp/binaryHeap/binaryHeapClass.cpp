/*
  * Homework - Heap
  * Started development on August 21, 2023.
  *
  *  Prompt: Create a Heap class/constructor
  *
  *  The Heap will take in the following input:
  *
  *                type: argument should be either 'min' or 'max'. This will
  *                      dictate whether the heap will be a minheap or maxheap->
  *                      The comparator method will be affected by this
  *                      argument. See method description below
  *
  *  The Heap will have the following property:
  *
  *             storage: array/vector
  *
  *                type: property that will be either 'min' or 'max'. This will
  *                      be dictated by
  *
  *  The Heap will have the following methods:
  *
  *             compare: takes in two arguments (a and b). Depending on the heap
  *                      type (minheap or maxheap), the comparator will behave
  *                      differently. If the heap is a minheap, then the compare
  *                      function will return true if a is less than b, false
  *                      otherwise. If the heap is a maxheap, then the compare
  *                      function will return true if a is greater than b, false
  *                      otherwise.
  *
  *                swap: takes in two indexes and swaps the elements at the two
  *                      indexes in the storage array
  *
  *                peak: returns the peak element of the storage array. This
  *                      will be the most minimum and maximum element for a
  *                      minheap and maxheap respectively
  *
  *                size: returns the number of elements in the heap
  *
  *              insert: inserts a value into the heap-> Should begin by pushing
  *                      the value onto the end of the array, and then calling
  *                      the bubbleUp method from the last index of the array
  *
  *            bubbleUp: takes in an index, and considers the element at that
  *                      index to be a child. Continues to swap that child with
  *                      its parent value if the heap comparator condition is
  *                      not fulfilled
  *
  *          removePeak: removes the peak element from the heap and returns it.
  *                      Should begin by swapping the 0th-index element with the
  *                      last element in the storage array. Uses bubbleDown
  *                      method from the 0th index
  *
  *          bubbleDown: takes in an index, and considers the element at this
  *                      index to be the parent. Continues to swap this parent
  *                      element with its children if the heap comparator
  *                      condition is not fulfilled
  *
  *              remove: takes in a value and (if it exists in the heap),
  *                      removes that value from the heap data structure and
  *                      returns it. Should rearrange the rest of the heap to
  *                      ensure the heap comparator conditions are fulfilled
  *                      for all of its elements
  *
  *
  *
  *  Input:  N/A
  *  Output: A Heap instance
  *
  *  What are the time and auxilliary space complexities of the various methods?
  *
  */

#include <vector>
#include <string>
#include <iostream>
#include <algorithm>
#include <typeinfo>
using namespace std;

class Heap {
  public:
    vector<int> storageVec;
    string typeStr;

    Heap(string typeStr) {
      this->typeStr = typeStr; 
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    bool compare(int parentInt, int childInt){
      int parentValueInt = this->storageVec[parentInt];
      int childValueInt = this->storageVec[childInt];
      if (this->typeStr == "min"){
        return parentValueInt <= childValueInt;
      }
      if (this->typeStr == "max"){
        return parentValueInt >= childValueInt;
      }
      return false;
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    void swap(int index1Int, int index2Int){
      int valueInt1 = this->storageVec[index1Int];
      int valueInt2 = this->storageVec[index2Int];
      this->storageVec[index1Int] = valueInt2;
      this->storageVec[index2Int] = valueInt1;
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    int peak(){
      return this->storageVec[0];
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    int size(){
       int sizeInt = 0;
      for (int valueInt: this->storageVec){
        sizeInt++;
      }
      return sizeInt;
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    void insert(int value){
      //YOUR WORK HERE
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    void bubbleUp(int index){
      //YOUR WORK HERE
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    int removePeak(){
      //YOUR WORK HERE
      return -1;
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    void bubbleDown(int index){
      //YOUR WORK HERE
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    bool remove(int value){
      //YOUR WORK HERE
      return false;
    }



};

