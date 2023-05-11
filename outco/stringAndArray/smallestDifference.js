// Given two arrays
// return a pair of values 
// whose difference is the smallest such difference of any two numbers in both arrays

const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let difference = Infinity;
  let smallestPair = [];

  // traverse over both arrays
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    // define vars
    // first hunts for the smallest number in arrayOne
    // second hunts for the smallest number in arrayTwo
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

    // update result
    if (smallest > difference) {
      smallest = difference;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
};

console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])); //=>[20,17]
