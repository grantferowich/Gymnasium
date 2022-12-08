
const printReverse = (arr) => {

    const traverse = (depth) => {
        if (depth > arr.length){
            return 
        }
        console.log(arr[arr.length - depth]);
        traverse(depth + 1)
    }
    //base case print element at last index
    traverse(0);
}

printReverse([1,2,3])
printReverse([])
printReverse([9])