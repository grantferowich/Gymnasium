// debugged solution and successfully tested solution 12/10/22

const nonDuplicate = array => {
  let inputObject = {};
  array.forEach(index => {
    if (inputObject[index]) {
      inputObject[index] = inputObject[index] + 1;
    } else {
      inputObject[index] = 1;
    }
  });
  let uniques = Object.keys(inputObject);
  return uniques;
};

console.log(nonDuplicate([1, 1, 1, 3, 3, 4, 555, 5, 5, 5])); // [1, 3, 4, 5, 555]
