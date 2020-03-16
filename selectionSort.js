// helper function, takes in the array, swaps the values of the indexes;
const swap = (a, x, y) => {
  let temp = a[x];
  a[x] = a[y];
  a[y] = temp;
};

const selectionSort = a => {
  //start with the initial index in the unsorted array
  let startIndex = 0;
  while (startIndex < a.length - 1) {
    let smallestIndex = startIndex;
    for (let j = startIndex + 1; j < a.length; j++) {
      if (a[smallestIndex] > a[j]) {
        smallestIndex = j;
      }
    }
    if (startIndex !== smallestIndex) {
      swap(a, startIndex, smallestIndex);
    }
    startIndex++;
  }

  return a;
};

console.log(
  selectionSort([
    12,
    345,
    4,
    546,
    122,
    84,
    98,
    64,
    9,
    1,
    3223,
    455,
    23,
    234,
    213
  ])
);
