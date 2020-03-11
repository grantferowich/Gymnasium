// Problem: Given a sorted array and a target value, determine whether or not the array contains the target.

//Advanced: If the array contains the target, what is the index?

//example: [1,2,3,4,5,6,7,8,9,50,100], target=100, true

//example: [1,2,3,4,5,6,7,8,9,50,76,100], target=80, false

const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (array[middleIndex] == target) {
      return console.log("True: target found at index " + middleIndex);
    }

    if (target > array[middleIndex]) {
      console.log("searching right side of array");
      startIndex = middleIndex + 1;
    }

    if (target < array[middleIndex]) {
      console.log("searching left side of array");
      endIndex = middleIndex - 1;
    } else {
      console.log("not found in this loop. looping again.");
    }
  }
  return console.log("false: target value not found");
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 15, 75], 15));
//it works
