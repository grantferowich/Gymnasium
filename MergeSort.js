//First, divide the list in two until there are lists of size 1;
//then, merge together all the smaller lists until there is only 1 sorted list;

const divide = unsortedArr => {
  if (unsortedArr.length == 1) {
    return unsortedArr;
  }

  const middle = Math.floor(unsortedArr.length / 2);

  const left = unsortedArr.slice(0, middle);
  const right = unsortedArr.slice(middle);

  return conquer(divide(left), divide(right));
};

const conquer = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(
  divide([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);
