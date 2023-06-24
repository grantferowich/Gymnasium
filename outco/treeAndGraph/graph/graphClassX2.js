/*
 *  Homework - Graph
 *
 * Engineered the file on May 22, 2023.
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
        this.storageMap = new Map();
    }

    addVertex(idInt){ 
        
        if (this.isVertex(idInt)){
            return false;
        }
        
        if (!this.isVertex(idInt)){
            this.storageMap.set(idInt, [])
            return true;
        }
    }

    removeVertex(idInt){
        
        if (this.isVertex(idInt)){
            this.storageMap.delete(idInt);
            return true
        }

        if (!this.isVertex(idInt)){
            return false;
        }
    }

    addEdge(id1Int, id2Int){
        
        if (!this.isVertex(id1Int)){
            this.addVertex(id1Int)
        }

        if (!this.isVertex(id2Int)){
            this.addVertex(id2Int);
        }

        if (this.isVertex(id1Int)){
            let edgesArr = this.storageMap.get(id1Int)
            edgesArr.push(id2Int);
            this.storageMap.set(id1Int, edgesArr);
            return true; 
        }
    }

    removeEdge(id1Int, id2Int){
        if (!this.isVertex(id1Int)){
            return false;
        }
        if (this.isVertex(id1Int)){
            let edgesArr = this.storageMap.get(id1Int);
            let xInt = 0;
            while (xInt < edgesArr.length){
                let edgeInt = edgesArr[xInt];
                if (edgeInt === id2Int){
                    edgesArr.splice(xInt, 1);
                }
                xInt++;
            }
        }
    }

    isVertex(idInt){
        if (this.storageMap.has(idInt)){
            return true
        }
        return false
    }

    print(){
        console.log(this.storageMap)
    }

    neighbors(idInt){
        if (!this.isVertex(idInt)){
            return false;
        }

        return this.storageMap.get(idInt)

    }
    
}

/* Tests */

let graph1 = new Graph();
// console.log(graph1.isVertex(2)) // successfully tested the isVertex(iInt) method on May 22, 2023.
console.log(graph1.addVertex(3));
console.log(graph1.addVertex(4));
graph1.addVertex(5);
graph1.addVertex(7)
// console.log(graph1.addVertex(3));
// console.log(graph1.removeVertex(3))
// console.log(graph1.removeVertex(1)) // successfully tested removeVertex(idInt) on May 22, 2023.
graph1.addEdge(3, 4);
graph1.addEdge(5, 10);
graph1.addEdge(5, 4);
graph1.addEdge(7, 10);
graph1.addEdge(5, 1)
graph1.print() // successfully tested addEdge(id1Int, id2Int)  and print()
const neighborsOf5Arr = graph1.neighbors(5)
console.log(neighborsOf5Arr) // successfully tested .neighbors(idInt)