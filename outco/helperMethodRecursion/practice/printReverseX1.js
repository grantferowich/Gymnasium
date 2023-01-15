// Input: array
// output: the array to the console in reverse order
// Input: [1,1,2,3]
// Output: [3,2,1,1]
// here is another way to approach the solution
// start from the input case and call the recursive function until the base case
const printReverse2 = (arr) => {
    const traverse = (depth) => {
        if (depth < 0){
            return;
        }
        console.log(arr[depth]);
        traverse(depth - 1);
    }
    
    traverse(arr.length -1)
}

printReverse2([1,1,2,3])
printReverse2([])
printReverse2([9])