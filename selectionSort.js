// helper function, takes in the array, swaps the values of the indexes;
const swap = (a, x, y) => {
  let temp = a[x];
  a[x] = a[y];
  a[y] = temp;
};

const selectionSort = a => {
  let length = a.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (a[min] > a[j]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(a, i, min);
    }
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
