const wordSplit = strArr => {
  const targetWord = strArr[0];
  const dictionary = strArr[1];
  dictionary.split(",");

  let i = 1;
  while (i < targetWord.length) {
    let partOne = targetWord.slice(0, i);
    let partTwo = targetWord.slice(i);
    if (dictionary.includes(partOne && partTwo)) {
      return partOne + "," + partTwo;
    }
    i++;
  }

  return console.log("not possible");
};

console.log(wordSplit(["hellocat", "apple,bat,cat,goodbye,hello,why"]));
console.log(
  wordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])
);
