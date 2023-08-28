/*
 *  Third Degree Neighbors
 *
 *  Developed on August 28, 2023.
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
 * Implement a queue. 
 * Traverse the graph in a breadth-first traversal manner:
 * Locate all the neighbors of the present node.
 * Enqueue those neighbors to the queue if the neighbors have not been visited. 
 * Keep track of the neighborDegreeInt. 
 * At first the neighborDegreeInt is 0.
 * If the 
 */