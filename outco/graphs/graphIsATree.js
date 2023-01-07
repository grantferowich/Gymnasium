
// graph is a tree? 
// A treee is a graph
// a tree is acyclic
// a tree is connected

/* 

            1 - 3
                |
                5

            3 - 6
                |
                9    

This is an unconnected graph. 

*/

// approach: 
// connectivity check: if there are any vertices with 0 edges, return false.
// If two pointers, a fast and slow pointer, eventually merge, then the graph is cyclic, return false.
// A breath-first search must traverse all vertices in the graph. 
// By checking left and right nodes, starting from the root node,
// all nodes must be processed. 
// There cannot be any nodes leftover after passing all nodes through a queue. 


const graphIsATree = (graph) => {
    



}