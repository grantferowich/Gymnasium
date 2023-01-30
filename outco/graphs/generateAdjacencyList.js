


const generateAdjacencyList = (edges) => {
    let graphX = new Graph();
    console.log(graphX)
    let f;
    let g;
    let x = 0;
    while (x < edges.length){
        let edge = edges[x];
        if (!graphX.vertices[edge[0]]){
            graphX.addVertex(edge[0])
        }
        if (!graphX.vertices[edge[1]]){
            graphX.addVertex(edge[1])
        }  
        graphX.addEdge(edge[0] ,edge[1]);
        graphX.addEdge(edge[1], edge[0])
        x++
    }
    return graphX.vertices
}

const edgesX = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(generateAdjacencyList(edgesX))

// let input = { 
//     i: [ 'j', 'k' ], 
//     j: [ 'i' ], 
//     k: [ 'i', 'm', 'l' ], 
//     m: [ 'k' ], 
//     l: [ 'k' ], 
//     o: [ 'n' ], 
//     n: [ 'o' ] 
//   } 