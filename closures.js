const summation = arr => {
  let sum = 1;

  //the sumFun closure captures the array even though the array is not passed as an argument
  const sumFun = () => {
    for (let i = 0; i < arr.length; i++) {
      sum *= arr[i];
    }
  };

  sumFun();
  return sum;
};

console.log(summation([1, 2, 3, 4]));
