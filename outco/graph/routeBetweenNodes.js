/* 
ROUTES BETWEEN NODES

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
    }
    return graph
}

const routeBetweenNodes = (edges, start, destination) => {
    if (edges === null || edges === undefined || edges.length === 0){return false}
    const graph = adjList(edges)
    // console.log(graph)
    // const dfs = (start) =>{

    // } 

    // dfs(start)
    // return false
}


/* TESTS */

const input = undefined
const result = routeBetweenNodes(input,1,11) 
console.log(result) // false

const input0 = [[1,2], [1,3], [3,11]]
const result0 = routeBetweenNodes(input0,1,11) 
console.log(result) // true

const input1 = [[1,2], [1,3], [3,11]]
const result1 = routeBetweenNodes(input0,11, 1) 
console.log(result) // false