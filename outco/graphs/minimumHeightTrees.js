/* 
Unfinished as of 1/18/23.
https://github.com/OutcoSF/outco-class-163/blob/main/whiteboarding/w3_d1_graphs/410_minimum_height_trees_HARD.md

input: an array of edges as tuples
output: the edges which could be the root of the shortest possible tree made from the edges
*/


const minimumHeightTree = (n, edges) => {
    const adjacenct = [];
    const degrees = [];

    for (let x = 0; x < n; x++){
        adjacenct[x] = [];
        degrees[x] = 0;
    }

    for (let x = 0; x < edges.length; x++){
        let edge = edges[x];
        // build degrees list
        degrees[edge[0]]++;
        degrees[edge[1]]++;
        // build adjacency list
        adjacenct[edge[0]].push(edge[1])
        adjacenct[edge[1]].push(edge[0])
    }

    let leaves = [];
    for (let x = 0; x < n; x++){
        if (degrees[x] === 1){
            leaves.push(x)
        }
    }

    while (n > 2){
        let newLeaves = [];
        n -= leaves.length;
        for (let x = 0; x < leaves.length; x++){
            let leaf = leaves[x];
            degrees[leaf]--;

            for (let k = 0; k < adjacenct[leaf].length; k++){
                let neighbor = adjacenct[leaf][k];
                degrees[neighbor]--;
                if (degrees[neighbor] === 1){
                    newLeaves.push(neighbor);
                }
            }

        }
        leaves = newLeaves;
    }
    return leaves;
}

const edgesX =  [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
// output: [ 3 , 4 ]
console.log(minimumHeightTree(6, edgesX))

