const moveElementToEnd = (array, toMove) => {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) {
      swap(array, i, j);
    }
    i++;
  }
  return array;
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 5], 2));
//=> [ 5, 1, 4, 3, 2, 2, 2, 2]
