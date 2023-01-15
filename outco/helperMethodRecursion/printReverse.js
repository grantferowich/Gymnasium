// input: array
// output: the array elements printed the console in reverse order
// e.g.
// input: [1,1,2,3]
// output: 3 2 1 1
// start from base case and build up to the input case
const printReverse = (arr) => {

    const traverse = (depth) => {
        if (depth === arr.length){
            return 
        }
        console.log(arr[arr.length - 1 -depth]);
        traverse(depth + 1)
    }
    //base case print element at last index
    traverse(0);
}

printReverse([1, 1, 2, 3]) // 3 2 1 1
printReverse([]) // should not log anything
printReverse([9]) // 9