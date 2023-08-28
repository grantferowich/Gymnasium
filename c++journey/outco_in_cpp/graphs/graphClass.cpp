/**
 *  Homework - Graph
 *
 *  Problem: Graph
 *
 *  Prompt: Create a directed graph class using adjacency list edge
 *          representation.
 *
 *  The Graph will have the following properties:
 *
 *             storage: {HashMap} - the keys represent unique vertex ids {Integer}
 *                      and the values are Lists/Vectors representing the
 *                      vertex ids of its neighors.
 *
 *  The Graph will also have the following methods:
 *
 *           addVertex: Method that accepts a vertex id {Integer} and adds the
 *                      vertex to the graph.  Return true if success and false
 *                      if failed.
 *
 *                      Input:    id {int}
 *                     Output:    {bool}
 *
 *        removeVertex: Method that accepts a vertex id and removes the vertex
 *                      with the matching id. Return true if success and false
 *                      if failed.
 *
 *                      Input:    id {int}
 *                     Output:    {bool}
 *
 *             addEdge: Method that accepts two vertex ids and creates a
 *                      directed edge from the first vertex to the second.
 *                      Returns true if success and false if failed.
 *
 *                      Input:    id1 {int}
 *                      Input:    id2 {int}
 *                     Output:    {bool}
 *
 *          removeEdge: Method that accepts two vertex id's and removes the
 *                      directed edge from the first vertex to the second.
 *                      Returns true if success and false if failed.
 *
 *                       Input:    id1 {int}
 *                       Input:    id2 {int}
 *                      Output:    {bool}
 *
 *           isVertex:  Method that accepts an id, and returns whether the vertex
 *                      exists in the graph.
 *
 *                       Input:    id {int}
 *                      Output:   {bool}
 *
 *           neighbors: Method that accepts a vertex id, and returns all of the
 *                      edges of that vertex.
 *
 *                       Input:    id {int}
 *                      Output:   {vector<int>}
 *
 *
 *  Input:  {Void}
 *  Output: {Graph}
 *
 *  Notes:   The notation for Time/Auxiliary Space Complexity for graphs
 *           is slightly different since certain functions depend on
 *           either the number of vertices, edges or even both
 *
 *           O(V) = Linear w/ respect to the number of vertices
 *           O(E) = Linear w/ respect to the number of edges
 *           O(V+E) = Linear w/ respect to the number of vertices * number of edges
 */

#include <set>
#include <map>
#include <vector>
#include <iostream>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <typeinfo>
using namespace std;

class Graph {
  public:
    unordered_map<int, vector<int>> storage;

    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool addVertex(int id) {
      // YOUR WORK HERE
      return true;
    }


    bool removeVertex(int id) {
      // YOUR WORK HERE
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool addEdge(int id1, int id2) {
      // YOUR WORK HERE
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    bool removeEdge(int id1, int id2) {
      // YOUR WORK HERE
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool isVertex(int id) {
      // YOUR WORK HERE
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    vector<int> neighbors(int id) {
      // YOUR WORK HERE
      return vector<int>{};
    }

};