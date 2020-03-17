const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let difference = Infinity;
  let smallestPair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let first = arrayOne[idxOne];
    let second = arrayTwo[idxTwo];
    if (first < second) {
      difference = second - first;
      idxOne++;
    } else if (first > second) {
      difference = first - second;
      idxTwo++;
    } else {
      return [first, second];
    }
    if (smallest > difference) {
      smallest = difference;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
};

console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])); //=>[20,17]
