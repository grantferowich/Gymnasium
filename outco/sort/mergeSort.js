// Successfully tested the function 1/25/23

function mergeSort(input) {
    if (input.length < 2){
      return input;
    }
    const midpoint = parseInt(input.length / 2);
    const left = input.slice(0, midpoint);
    const right = input.slice(midpoint);
    // helper method
    const merge = (left, right) => {
      let output = [];
      while (left.length && right.length){
        if (left[0] < right[0]){
          output.push(left.shift());
        } else {
          output.push(right.shift());
        }
      }
      return output.concat(left.slice()).concat(right.slice());
    }
    return merge(mergeSort(left), mergeSort(right));
}
let input = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
console.log(
  mergeSort(input)
);

// [
//     1,   4,   9,  12,   23,
//    64,  84,  98, 122,  213,
//   234, 345, 455, 546, 3223
// ]