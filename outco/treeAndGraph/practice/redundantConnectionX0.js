
 /*
  *  Redundant Connection
  *
  *  Given a directed graph (list of edges), where if one of the edges is
  *  removed, the graph will become a tree.  Return that edge.
  *
  *  Parameters:
  *
  *  Input: edges: [[Integer]]
  *  Output: [Integer]
  *
  *  Examples:
  *
  * `{{1, 2}, {1, 3}, {2, 3}} --> {2, 3}`
  * `{{1, 2}, {2, 3}, {2, 4}, {4, 5}, {5, 2}} --> {5, 2}`
  * 
  * start:
  *      1
  *    /  \ 
  *   2 - 3
  * => remove 2 - 3
  * end: 
  * =>    1 
  *    /    \
  *   2     3
  *  
  * idea: 
  * // traverse in a depth first way
  * // if a node was already visited, 
  * // and now you are visiting that node 
  * // a second time,
  * // the edge leading up to that node may be removed 
  *  and the graph will become a tree
  *   
  * // if (visited.has(node)){
  *   return [edge pair]
  * }
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

 
 function redundantConnection(edgeList) {
    let root = edgeList[0];
    let queue = [root];
    let visited = new Set();
    

    while (queue.length > 0){
        
        // grab the current first item
        let node = queue.shift();

        // mark the current node as visited
        visited.add(node);
        
        let vertex = node[0];
        let neighbor = node[1];

        // if the current vertex, edge pair 
        // leads to a cycle
        // then return the current vertex, edge pair 
        if (!visited.has(neighbor)){
            queue.push(neighbor);
            visited.add(neighbor)
        }
        
        if (visited.has(neighbor)){
            // console.log(node)
            return [vertex, neighbor]
        }
    }
    return -1;
 }
  
//   Input: edges = [[1,2],[1,3],[2,3]]
//   Output: [2,3]
const edges = [[1,2],[1,3],[2,3]];
console.log(redundantConnection(edges))