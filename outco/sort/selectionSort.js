// Successfully tested the function 1/25/23
// 
// Time Complexity: O(N^2)
// Auxiliary Space Complexity: O(1)
function selectionSort(input){
    //start with the initial index in the unsorted array
    const swap = (a, x, y) => {
      let temp = a[x];
      a[x] = a[y];
      a[y] = temp;
    };
  
    let startIndex = 0;
    while (startIndex < input.length - 1) {
      let smallestIndex = startIndex;
      for (let j = startIndex + 1; j < input.length; j++) {
        if (input[smallestIndex] > input[j]) {
          smallestIndex = j;
        }
      }
      if (startIndex !== smallestIndex) {
        swap(input, startIndex, smallestIndex);
      }
      startIndex++;
    }
  
    return input;
}

let input = [ 1 , 5 , 21 , 89 , 34 , 1 , 2 , 3 , 8 , 13 , 55 ]
console.log(selectionSort(input))

// [
//     1,  1,  2,  3,  5,
//     8, 13, 21, 34, 55,
//    89
//  ]