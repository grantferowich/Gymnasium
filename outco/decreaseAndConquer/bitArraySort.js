// Given a bit array, return the array sorted in place using multiple pointerss
// input: array
// output: array
// constraints: O(N) space and O(N) runtime
// the problem instructs us to sort the array in place 
// this condition tells us the algorithm must not introduce new data structures
// The input space is O(N). The auxiliary space is O(2). 
// Therefore the space complexity of the algorithm is O(N).

const bitArraySort = (array) => {
    let x = 0;
    for (let y = 0; y < array.length; y++){
        if (array[y] === 0){
            // use destructuring assignment to move the element at y 
            // from the y index to the y-1 index
            [array[x], array[y]] = [array[y], array[x]]
            x++;
        }
    }
    return console.log(array)
}

bitArraySort([1,0,0,1]) // => [0,0,1,1]