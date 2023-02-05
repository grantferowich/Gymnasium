// Successfully tested the function for the first time 1/7/23.
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
// 


class TreeNode{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

let graph3 =  {
    0 : [1, 2, 3],
    1 : [0],
    2 : [0],
    3 : [0],
    4 : []
  };
// expected output: false

let graph2 =
 {
   0 : [1, 2, 3],
   1 : [0, 2],
   2 : [0, 1],
   3 : [0, 4],
   4 : [3]
 } // expected output: true


const graphIsATree = (graph) => {

    // island check
    for (let vertex in graph){
        let edges = graph[vertex];
        if (!edges.length){
            return false
        }
    }
    
    let root = graph[0];
    let queue = [root];
    let visited = {};
   
    // breadth-first search on the root
    // the bfs will tell whether or not the graph is cyclic
    // ( a graph which is cyclic is not a tree)
    while (queue.length > 0){ 
        let currentNode = queue.shift();
        let edges = currentNode;
        for (let x = 0; x < edges.length; x++){
            let node = edges[x];
            queue.push(node);
            //visited[node] ? false : visited[node] = true;
            if (visited[node]){
                return false
            } 
            if (!visited[node]){
                visited[node] = true
            }
        }
    }
    return true
}
console.log(graphIsATree(graph3)) // expected output: false | actual output: false
console.log(graphIsATree(graph2)) // expected output: true | actual output: true