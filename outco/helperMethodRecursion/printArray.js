

const printArray = (arr) => {

    const printEle = (depth) => {
      if (depth === arr.length){
        return 
      }
      console.log(arr[depth]);
      printEle(depth+1)
    }

    printEle(0)
}

printArray([1,2,3])
printArray([])
printArray([9])