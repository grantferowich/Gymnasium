// findPermutations("aabc")

// (12) ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"]

const findPermutations = string => {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (i < j) {
        result.push([string[i], string[j]]);
      }
    }
  }
  return result;
};

console.log(findPermutations("aabc"));
