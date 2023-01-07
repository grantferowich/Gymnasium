const productSum = (array, multiplier = 1) => {
  let sum = 0;
  array.forEach(element => {
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1);
    } else {
      sum += element;
    }
  });
  return sum * multiplier;
};

console.log(productSum([1, 2, 3, 4, 5])); //=> 15
console.log(productSum([[1, 2], 3, [4, 5]])); //=> 27
