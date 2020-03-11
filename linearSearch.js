//Given an unsorted array, determine whether an array contains a target value.

//Example: [1,2,3,4,5], target=1 => true
//Example: [1,2,3,4,5,6,7,8,9] target=10 => false

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return true;
    }
  }
  return false;
};

console.log(linearSearch([1, 2, 3], 3));
//this logs true, cool.
