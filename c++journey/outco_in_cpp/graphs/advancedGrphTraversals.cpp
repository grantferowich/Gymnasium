/*
 * Homework - Advanced Graph Traversals
 *
 * Instructions: We will be exploring further graph traversal problems in this
 * homework file. You'll want to go through the corresponding learning material
 * on the Data Structures and Algorithms course at
 * https://outco.teachable.com/courses/438359/lectures/6721871
 *
 * You'll want to use the following classes in your code:
 *     - Graph
 *     - Stack
 *     - Queue
 **/

#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <typeinfo>
using namespace std;


 /*
  *  Predict Order
  *
  *  Practice visualizing the order of traversal for each of the following
  *  graphs. Write a valid ordering if 1) BFS, 2) DFS (pre-order), and
  *  3) topological sort is performed. The starting vertex for BFS and DFS
  *  is vertex 0
  *
  *  There are no tests for this particular problem. Additionally, for some of
  *  these graphs, there are multiple possible solutions
  *
  *
  *
  *  Graph A: https://res.cloudinary.com/outco/image/upload/v1519855558/graph-traversal/Paper.Graph_Traversal.10.png
  *
  *  YOUR WORK HERE
  *  1) BFS:
  *  2) DFS:
  *  3) Topological sort:
  *
  *  Graph B: https://res.cloudinary.com/outco/image/upload/v1519855554/graph-traversal/Paper.Graph_Traversal.11.png
  *
  *  YOUR WORK HERE
  *  1) BFS:
  *  2) DFS:
  *  3) Topological sort:
  *
  *  Graph C: https://res.cloudinary.com/outco/image/upload/v1519855557/graph-traversal/Paper.Graph_Traversal.12.png
  *
  *  YOUR WORK HERE
  *  1) BFS:
  *  2) DFS:
  *  3) Topological sort:
  *
  */


 /*
  *  Redundant Connection
  *
  *  Given a directed graph (list of edges), where if one of the edges is
  *  removed, the graph will become a tree.  Return that edge.
  *
  *  Parameters:
  *
  *  Input: edges: [[int]]
  *  Output: [int]
  *
  *  Examples:
  *
  * `{{1, 2}, {1, 3}, {2, 3}} --> {2, 3}`
  * `{{1, 2}, {2, 3}, {2, 4}, {4, 5}, {5, 2}} --> {5, 2}`
  *
  *  Note:
  *  - For some inputs, there coule be multiple
  *    correct solutions
  *
  *  Resources:
  *  - https://leetcode.com/problems/redundant-connection-ii/description/
  *
  *
  */




vector<int> redundantConnection(vector<vector<int>> edges) {
    // YOUR WORK HERE
    return vector<int>{};
}


/*
 *  Third Degree Neighbors
 *
 *  Given an undirected graph represented by a list of edges and a start
 *  vertex, return an array of the 3rd degree neighbors.
 *
 *  Parameters:
 *
 *  Input: edges: [[int]]
 *  Input: start: int
 *  Output: [int]
 *
 *  Example:
 *
 *  The following example with start vertex `1`:
 *  Input: `{{1,2},{2,1},{1,3},{3,1},{2,4},{4,2},{3,4},{4,3},
 *           {4,8},{8,4},{4,5},{5,4},{5,6},{6,5},{5,7},{7,5},
 *           {6,7},{7,6},{8,7},{7,8},{8,9},{9,8}}`
 *  Input: 1
 *  Output: `[5,8]` or `[8,5]`     (order does not matter)
 *  Picture here: https://res.cloudinary.com/outco/image/upload/v1519850256/graph-traversal/Paper.Graph_Traversal.2.png
 *
 *
 *
 */

vector<int> thirdDegreeNeighbors(vector<vector<int>> edges, int start) {
  // YOUR WORK HERE
  return vector<int>{};
}


/*
 *  Detect Cycle in Graph (Undirected)
 *
 *  Given edges that represent an undirected graph, determine if the graph
 *  has a cycle. A cycle has a minimum of 3 vertices.
 *
 *  Parameters:
 *
 *  Input: edges: [[int]]
 *  Output: bool
 *
 *  Example:
 *
 *  Input: `{{1,2},{2,1},{2,3},{3,2},{3,1},{1,3},
 *           {3,4},{4,3},{5,4},{4,5},{5,6},{6,5},
 *           {4,7},{7,4}}`
 *  Output: True
 *
 *  Resources:
 *  - https://www.geeksforgeeks.org/detect-cycle-undirected-graph/
 *
 */

bool detectCycleInGraph(vector<vector<int>> edges) {
  // YOUR WORK HERE
  return false;
}


/*
 *  Friend Circles
 *
 *  A friend circle is a group of people who are direct or indirect friends.
 *  Given a NxN bitset matrix, where a 1 in the i,j coordinate signifies a
 *  friendship between person i and person j, determine how many circles of
 *  friends there are.
 *
 *  Parameters:
 *
 *  Input: Graph: [[int]] (adjacency matrix)
 *  Output: int
 *
 *  Example:
 *
 *  Input: `{{1,1,0}, {1,1,0}, {0,0,1}}`
 *  Output: 2
 *
 *  Input: `{{1,1,0}, {1,1,1}, {0,1,1}}`
 *  Output: 1
 *
 *  Resources:
 *  - https://leetcode.com/problems/friend-circles/description/
 *
 */


int friendCircles(vector<vector<int>> matrix) {
  // YOUR WORK HERE
  return -1;
}


/*
 *  Longest Path I
 *
 *  Given a DAG (directed acyclic graph), find the longest path in the graph.
 *
 *  Parameters:
 *
 *  Input: Graph: [[int]] (edge list)
 *  Output: int
 *
 *  Example:
 *
 *  Input: {{1,2},{2,3},{1,3}}
 *  Output: {1,2,3}
 *
 *  Input: {{6,5},{6,4},{5,4},{4,3},{2,3},{1,2},{4,1}}
 *  Output: {6,5,4,1,2,3}
 *
 *  Resources:
 *  - https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/
 *
 */



vector<int> longestPathI(vector<vector<int>> edges) {
   // YOUR WORK HERE
   return vector<int>{};
}



 /*
  *  Course Schedule
  *
  *  A collection of courses at a University has prerequisite courses that must
  *  be taken first.  Given an array of course pairs [A, B] where A is the
  *  prerequisite of B, determine a valid sequence of courses a student can
  *  take to complete all the courses.
  *
  *  Parameters:
  *
  *  Input: courses: [[String]]
  *  Output: [String]
  *
  *  Example:
  *
  *  Input: {{"a","b"},{"a","c"},{"b","d"},{"c","d"}}
  *  Output: {"a","b","c","d"} or {"a","c","b","d"}
  *
  *  Input: {{"a","b"},{"b","c"},{"c","d"}}
  *  Output: {"a","b","c","d"}
  *
  *
  */

vector<string> courseSchedule(vector<vector<string>> edges) {
  // YOUR WORK HERE
  return vector<string>{};
}


/*
 *  Cryptic Dictionary
 *
 *  An array of strings in lexicographical (alphabetical) order has been put
 *  through a [simple substitution cypher](https://en.wikipedia.org/wiki/Substitution_cipher)
 *  where each letter is now substituted for another letter. Determine a valid
 *  ordering of characters in the cypher.
 *
 *  Parameters:
 *
 *  Input: words: [String]
 *  Output: [String]
 *
 *  Example:
 *
 *  Input: {"baa", "abcd", "abca", "cab", "cad"}
 *  Output: {"b", "d", "a", "c"}
 *
 *  Input: {"caa", "aaa", "aab"}
 *  Output: {"c", "a", "b"}
 *
 *  Source: https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/
 */


vector<string> crypticDictionary(vector<string> words) {
    // YOUR WORK HERE
    return vector<string>{};
}
