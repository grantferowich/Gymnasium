// Successfully tested the function 1/25/23.
function insertionSort(input) {
  
    for (let x = 0; x < input.length; x++){
      let current = input[x];
      let y = x - 1;
      while ( y >= 0 && input[y] > current){
        input[y + 1] = input[y];
        y--;
      }
      input[y+1] = current;
    }
    return input
}

const input = [ 1 , 5 , 21 , 89 , 34 , 1 , 2 , 3 , 8 , 13 , 55 ];
console.log(insertionSort(input));

// [
//     1,  1,  2,  3,  5,
//     8, 13, 21, 34, 55,
//    89
//  ]