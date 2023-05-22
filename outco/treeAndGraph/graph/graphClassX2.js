/*
 *  Homework - Graph
 *
 *  Problem: Graph
 *
 *  Prompt: Create a directed graph class using adjacency list edge
 *          representation.
 *
 *  The Graph will have the following properties:
 *
 *             storage: {Hash Table} - the keys represent unique vertex ids
 *                      and the values are arrays of Integers representing the
 *                      vertex ids of its neighors.
 *
 *  The Graph will also have the following methods:
 *
 *           addVertex: Method that accepts a vertex id {Integer} and adds the
 *                      vertex to the graph.  Return true if success and false
 *                      if failed.
 *
 *                      Input:    id {Integer}
 *                     Output:    {Boolean}
 *
 *        removeVertex: Method that accepts a vertex id and removes the vertex
 *                      with the matching id. Return true if success and false
 *                      if failed.
 *
 *                      Input:    id {Integer}
 *                     Output:    {Boolean}
 *
 *             addEdge: Method that accepts two vertex ids and creates a
 *                      directed edge from the first vertex to the second.
 *                      Returns true if success and false if failed.
 *
 *                      Input:    id1 {Integer}
 *                      Input:    id2 {Integer}
 *                     Output:    {Boolean}
 *
 *          removeEdge: Method that accepts two vertex id's and removes the
 *                      directed edge from the first vertex to the second.
 *                      Returns true if success and false if failed.
 *
 *                       Input:    id1 {Integer}
 *                       Input:    id2 {Integer}
 *                      Output:    {Boolean}
 *
 *           isVertex:  Method that accepts an id, and returns whether the vertex
 *                      exists in the graph.
 *
 *                       Input:    id {Integer}
 *                      Output:   {Boolean}
 *
 *           neighbors: Method that accepts a vertex id, and returns all of the
 *                      edges of that vertex.
 *
 *                       Input:    id {Integer}
 *                      Output:   {Array}
 *
 *
 *  Input:  {Undefined}
 *  Output: {Graph}
 *
 *  Notes:   The notation for Time/Auxiliary Space Complexity for graphs
 *           is slightly different since certain functions depend on
 *           either the number of vertices, edges or even both
 *
 *           O(V) = Linear w/ respect to the number of vertices
 *           O(E) = Linear w/ respect to the number of edges
 *           O(V+E) = Linear w/ respect to the number of vertices plus edges
 */

class Graph{
    constructor(){
        this.storage = new Map();
    }

    addVertex(idInt){ 
        if (this.isVertex(idInt)){
            return false;
        }
        if (!this.isVertex(idInt)){
            this.storage.set(idInt, [])
            return true;
        }
    }

    removeVertex(idInt){
        if (this.isVertex(idInt)){
            this.storage.delete(idInt);
            return true
        }
        if (!this.isVertex(idInt)){
            return false;
        }
    }

    isVertex(idInt){
        if (this.storage.has(idInt)){
            return true
        }
        return false
    }
    
}

let graph1 = new Graph();
// console.log(graph1.isVertex(2)) // successfully tested the isVertex(iInt) method on May 22, 2023.
console.log(graph1.addVertex(3));
console.log(graph1.addVertex(4));
console.log(graph1.addVertex(3));
// console.log(graph1.removeVertex(3))
console.log(graph1.removeVertex(1)) // successfully tested removeVertex(idInt) on May 22, 2023.

