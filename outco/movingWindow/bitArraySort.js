/* 
Grant Ferowich
December 22, 2023
Bit Array Sort

Successfully tested the function on December 22, 2023.
*/

var t0 = performance.now();

const bitArraySort = (array) => {
    let x = 0;
    for (let y = 0; y < array.length; y++){
        if (array[y] === 0){
            // use destructuring assignment to move the element at y 
            // from the y index to the y-1 index
            [array[x], array[y]] = [array[y], array[x]]
            console.log(array)
            x++;
        }
    }
    return array
}


console.log(bitArraySort([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1])) 
const arr3 = [ 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1];
console.log(bitArraySort(arr3));
var t1 = performance.now();
console.log("Call to bitArraySort took " + (t1 - t0) + " milliseconds.");