/*
 *
 *  2. Given a starting vertex, and an integer destination, return all valid
 *     paths for a given source and destination.
 *
 *  Input: {Vertex} - the starting vertex
 *         {Destination} - integer value of the destination vertex
 *  Output: {Array} - an array of arrays of integers
 *
 *  HINT: Use a set or hash map to handle redundancy
 *
 *  NOTE: Please be aware that this problem is a slight variation
 *    of the HackerRank challenge that was provided in class. How would you
 *    handle things differently if each path returned needed to be a list?
 *
 * 
 *              A -> B -> C
 *              |
 *              v
 *              K -> W -> F -> U
 *              
 *              DFS(A,U): [A, K, W, F, U]
 *              { A: [ B , K ],
 *                B: [ C ],
 *                C: [ ],
 *                K: [ W ],
 *                W: [ F ],
 *                F: [ U ]}
 *              
 *  
 */


function dfs(vertex, destination){
    
    const output = []
    const visited = {}
    const stack = [vertex];
    visited[vertex] = true;

    while (stack.length > 0){
        

    }

    return output;
}