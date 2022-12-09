
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

// printReverse([1,2,3])
// printReverse([])
// printReverse([9])


// here is another way to approach the solution

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

printReverse2([1,2,3])
printReverse2([])
printReverse2([9])