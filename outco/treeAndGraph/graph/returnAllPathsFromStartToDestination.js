/*
 * Successfully tested the function 1/30/23.
 * DFS: Return arrays of all paths from the starting vertex to the destination

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
 *              Test case 1: 
 *              A -> B -> C
 *              |
 *              v
 *              K -> W -> F -> U
 *              
 *              Array of Tuples: [[ A, B ], [ B, C ], [ A, K],
 *                               [ K, W ], [ W, F ], [ F, U ]]
 * 
 *              DFS(A,U): [A, K, W, F, U]
 *              
 *              Adjacency List: { A: [ B , K ],
 *                B: [ C ],
 *                C: [ ],
 *                K: [ W ],
 *                W: [ F ],
 *                F: [ U ]}
 *              
 *                      
 *                      C
 *                    /^  \
 *              A -> B     W -> F -> U
 *                    \   /
 *                    v  /
 *                     K 
 *              Array of Tuples: [[ 'A', 'B' ], [ 'B', 'C' ], [ 'C', 'W' ], 
 *                                [ 'B', 'K' ], [ 'K', 'W' ], [ 'W', 'F' ],
 *                                [ 'F', 'U' ]]
 *              Adjacency List: {
 *                                A: [ B ],
 *                                B: [ C , K],
 *                                C: [ W ],
 *                                K: [ W ],
 *                                W: [ F ],
 *                                U: []   
 *                                  }
 */                    

class Vertex{
    constructor(id){
        this.id = id !== undefined ? id : null;
        this.edges = [];
    }
}

const generateAdjacencyList = (arrayOfTuples) => {
    const list = {};
    for (let x = 0; x < arrayOfTuples.length; x++){
        const id1 = arrayOfTuples[x][0];
        const id2 = arrayOfTuples[x][1];
        if (!list[id1]){
            list[id1] = [];
        }
        if (list[id1]){
            list[id1].push(id2);
        }
    }
    return list;
}

const arrayOfTuples =[[ 'A', 'B' ], [ 'B', 'C' ], [ 'A', 'K' ],
                      [ 'K', 'W' ], [ 'W', 'F' ], [ 'F', 'U' ]]

const arrayOfTuples2 = [[ 'A', 'B' ], [ 'B', 'C' ], [ 'C', 'W' ], 
                        [ 'B', 'K' ], [ 'K', 'W' ], [ 'W', 'F' ],
                        [ 'F', 'U' ]]

// const list = generateAdjacencyList(arrayOfTuples)
// console.log(list)


function returnAllPaths(arrayOfTuples, vertex, destination){
   
    const graph = generateAdjacencyList(arrayOfTuples);
    let output = [];
    const path = [];
    const visited = new Set();
    visited[vertex] = true;

    const traverse = (vertex) => {
        path.push(vertex);
        //base case: reached destination
        if (vertex === destination){
            output.push([...path]);
            path.pop();
            return;
        }
        let edges = graph[vertex];
        // base case: bottomed out
        if (!edges){
            path.pop();
            return
        }
        visited.add(vertex);
        for (const edge of edges){
            // case 1: edge was already visited
            if (visited.has(edge)){
                continue;
            }
            // case 2: first time seeing this edge
            traverse(edge);
        }
        path.pop();  
        visited.delete(vertex);
    }
    traverse(vertex);
    return output;
}

const output = returnAllPaths(arrayOfTuples, 'A', 'U') // [ [ 'A', 'K', 'W', 'F', 'U' ] ]
const output2 = returnAllPaths(arrayOfTuples2, 'A', 'U') // [ [ 'A', 'B', 'C', 'W', 'F', 'U' ], [ 'A', 'B', 'K', 'W', 'F', 'U' ] ]
console.log(output);
console.log(output2)