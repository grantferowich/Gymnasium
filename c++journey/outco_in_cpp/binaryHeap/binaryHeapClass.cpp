/*
  * Homework - Heap
  *
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
    vector<int> storage;
    string type;

    Heap(string type) {
      //YOUR WORK HERE
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    bool compare(int a, int b){
      //YOUR WORK HERE
      return false;
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    void swap(int index1, int index2){
      //YOUR WORK HERE
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    int peak(){
      //YOUR WORK HERE
      return -1;
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    int size(){
      //YOUR WORK HERE
      return -1;
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

