/* 
ROUTES BETWEEN NODES
CTCI 4.1

Complexity Analysis

Time: O(V+E)
Space: O(V+E)

input: list of edges
output: true/false
*/

const adjList = (edges) => {
    let graph = new Map()
    for (let x = 0; x < edges.length; x++){
        let v = edges[x][0]
        let u = edges[x][1]
        if (graph.has(v)){
            graph.get(v).push(u)
        }
        if (!graph.has(v)){
            graph.set(v,[u])
        }
        if (!graph.has(u)){
            graph.set(u, [])
        }
    }
    return graph
}

const routeBetweenNodes = (edges, start, destination) => {
    if (edges === null || edges === undefined){return false}
    if (edges.length === 0) {return true}
    const graph = adjList(edges)
    let visited = new Set()
    visited.add(start)
    let output;
    
    const dfs = (v) =>{
        if (v === destination){
            output = true
        }
        visited.add(v)
        const neighbors = graph.get(v)

        if (neighbors !== undefined){
            for (let x = 0; x < neighbors.length; x++){
                if (!visited.has(neighbors[x]))
                dfs(neighbors[x])
            }
        }
        visited.delete(v)
    }
    
    dfs(start)
    return output ? output : false
}


/* TESTS */

const input = undefined
const result = routeBetweenNodes(input,1,11) 
console.log(result) // false

const input0 = [[1,2], [1,3], [3,11]]
const result0 = routeBetweenNodes(input0,1,11) 
console.log(result0) // true

const input1 = [[1,2], [1,3], [3,11]]
const result1 = routeBetweenNodes(input1,11, 1) 
console.log(result1) // false
