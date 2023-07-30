/*
 *  Homework - Complexity
 *
 *  For the following functions, write the expected Time and Auxiliary Space
 *  Complexity using what you know about nested loops, hash table look-ups and
 *  the runtime of built in functions.
 *
 *  NOTE: You don't need to code to anything for these problems, just write
 *  what you the complexity to be using big-O notation
 **/

 #include <cmath>
 #include <string>
 #include <vector>
 #include <algorithm>
 #include <unordered_map>
 #include <iostream>
 using namespace std;


 /*  Order of Magnitude

 Reduce the following into it's Big-O order of magnitude.

 1. 5 + N                    Answer:
 2. N + N^2                  Answer:
 3. 15N + 13N                Answer:
 4. 10000                    Answer:
 5. log(N) + 1               Answer:
 6. log(N) * 3 + 14N + 3     Answer:
 7. Nlog(N) + 3N^2           Answer:
 8. N^3 + log(N^4)           Answer:
 9. N! + 180000N^2           Answer:
 10. 15002^N                 Answer:
 */



 /*  Index Of

 Given an array of integers and a target value, return the index of the first
 element that matches the target value. If there are no matches, return -1.

 Parameters
 Input: arr {Array of ints}
 Input: target {int}
 Output: {int}

 Examples
 [1, 2, 3, 4, 5, 6], 5 --> 4
 [9, 83, 74], 8 --> -1
 [6, 4, 7, 9, 7, 8, 2, 4, 3], 7 --> 2

 Time Complexity:
 Auxiliary Space Complexity:

 */
 int indexOf(vector<int> arr, int target) {

 }


 /*  Evens

 Given an array of integers, return an array of only the even values.

 Parameters
 Input: arr {Array of ints}
 Output: {List of ints}

 Examples
 [1, 2, 3, 4, 5, 6] --> [2, 4, 6]
 [9, 83, 74] --> [74]
 [6, 4, 7, 9, 7, 8, 2, 4, 3] --> [6, 4, 8, 2, 4]

 Time Complexity:
 Auxiliary Space Complexity:

 */
 vector<int> evens(vector<int> arr) {
 
 }


 /*  Sum

 Given an array of integers, return the sum of all the integers.

 Parameters
 Input: arr {Array of ints}
 Output: {int}

 Examples
 [1, 2, 3, 4, 5] --> 15
 [0, 1, -1] --> 0
 [] --> 0

 Time Complexity:
 Auxiliary Space Complexity:

 */
 int sum(vector<int> arr) {

 }


 /*  Merge Arrays

 Given two sorted arrays of integers, return a merged sorted array of both inputs.

 Parameters
 Input: arr1 {Array of ints}
 Input: arr2 {Array of ints}
 Output: {Array of ints}

 Examples
 [1, 3, 9], [2, 4, 8] --> [1, 2, 3, 4, 8, 9]
 [12, 25, 40], [20, 37, 45] --> [12, 20, 25, 37, 40, 45]
 [10, 13, 24], [12, 35] --> [10, 12, 13, 24, 35]

 Time Complexity:
 Auxiliary Space Complexity:

 */
 vector<int> merge(vector<int> arr1, vector<int> arr2) {

 }


 /*  Binary Search

 Given a sorted array and a target value, use binary search to return the index of the target in the input array.
 Return -1 if no such target is found.

 Parameters
 Input: arr {Array of ints}
 Input: val {int}
 Output: {int}

 Examples
 [1, 3, 4, 5, 8, 9], 5 --> 3
 [5, 7, 10, 12, 14], 7 --> 1
 [2, 4, 8, 9, 15], 3 --> -1

 Time Complexity:
 Auxiliary Space Complexity:

 */
 int binarySearch(vector<int> arr, int val) {

 }


 /*  Factorial

 Given an input integer n, return the n factorial value.

 Parameters
 Input: n {int}
 Output: {int}

 Examples
 5  --> 120 (5 * 4 * 3 * 2 * 1)
 1 --> 1 (1)
 9 --> 362880 (9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)

 Time Complexity:
 Auxiliary Space Complexity:

 */
 int factorial(int n) {
 
 }


/*  First Times Last
 *
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 */
 int firstTimesLast(vector<int> arr) {

 }


 /*  Most Frequent Occurrence
  *
  *  Time Complexity:
  *  Auxiliary Space Complexity:
  */
 char mostFrequentOccurrence(string str) {

 }


 /* Print Unordered Pairs
  *
  *  Time Complexity:
  *  Auxiliary Space Complexity:
  */
 void printUnorderedPairs(vector<int> arr) {

 }


 /**
  *  Make Combined Matrix
  *  Time Complexity:
  *  Auxiliary Space Complexity:
  */
 vector<vector<int>> makeCombinedMatrix(vector<int> arr1, vector<int> arr2) {
 
  
 }

 /**
  *  Nth Fibonacci
  *
  *  Time Complexity:
  *  Auxiliary Space Complexity:
  */
 int nthFibonacci(int n) {
 
 }


/* Nth Fibonacci - the return
*
*  Time Complexity:
*  Auxiliary Space Complexity:
*/

unordered_map<int, int> cache;

