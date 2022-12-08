

const printArray = (arr) => {

    const printEle = (array, depth) => {
      if (array.length == 0){
        return 
      }
      console.log(array[depth]);
      array.shift();
      printEle(array, depth+1)
    }
    
    printEle(arr, 0)
}

printArray([1,2,3])
