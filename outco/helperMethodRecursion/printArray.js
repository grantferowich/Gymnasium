/* 
Print Array

Successfully tested the function 12/10/22.

Print all the elements in the array to the console.

Input: an array
Outuput: values to the console

Complexity analysis 
Time complexity: 0(N)
Space complexity: O(1)
 */
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