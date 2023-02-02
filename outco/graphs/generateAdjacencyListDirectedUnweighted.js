
/*   
Generate directed, unweighted adjacency list
Successfully tested the function 2/2/23.
This function generates a directed, unweighted adjacency list.


*/
const generateAdjacencyListDirectedUnweighted = (arrayOfTuples) => {
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

const edges = [[1,2], [1,3], [2,3]]
const graph = generateAdjacencyListDirectedUnweighted(edges)
console.log(graph) // { '1': [ 2, 3 ], '2': [ 3 ] }