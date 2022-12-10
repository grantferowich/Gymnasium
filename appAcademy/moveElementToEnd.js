
// const moveElementToEnd = (array, toMove) => {
//   let i = 0;
//   let j = array.length - 1;
//   while (i < j) {
//     while (i < j && array[j] === toMove) j--;
//     if (array[i] === toMove) {
//       swap(array, i, j);
//     }
//     i++;
//   }
//   return array;
// };

// const swap = (array, i, j) => {
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// };

// given an array and a target value move the target value to the last index in the array
// use multiple pointers
// input: an array and an integer
// output: an array 
// Constraints: 
// edge cases: the target value may appear in the array more than once
// if the array is empty return error message

// understanding: for a given element in the array
// if the element is the target value
// swap the element at y position [y,y+1] to the y+1 position
// if value equals target then swap to move target to the y+1 spot
// use a pointer called x
// use a loop with y
// if there is a swap then increment x

// Reviewed function and successfully tested solution 12/10/122

const moveElementToEnd = (array, target) => {

    let x = 0;
    let n = array.length;
    while (x < n){
        while (x < n && array[n] == target) {n--}
        if (array[x] === target){
          swap(array, x, n)
        } 
        x++
    }

 return array
}

const swap = (array, x, y) => {
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 5], 2));
//=> [ 5, 1, 4, 3, 2, 2, 2, 2]
