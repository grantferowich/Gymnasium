//** does not yet pass all test cases on Leetcode**

const firstUniqChar = s => {
  if ((s = "")) {
    return -1;
  }
  if (s.length === 1) {
    return 0;
  }

  let currentIdx = 0;
  let last = s.length - 1;
  while (currentIdx <= s.length) {
    for (let i = 1; i < s.length; i++) {
      let remainder = s.slice(i, last);
      let secondRemainder = s.slice(0, i - 1);
      if (
        !remainder.includes(s[currentIdx]) &&
        !secondRemainder.includes(s[currentIdx])
      ) {
        return currentIdx;
      } else currentIdx++;
    }
    return -1;
  }
};

console.log(firstUniqChar("leetcode")); //=> 0
console.log(firstUniqChar("loveleetcode")); //=> 2
console.log(firstUniqChar("aaaaaaaa")); //=> -1
console.log(firstUniqChar("aaaaaaaaaaab")); //=> 10
console.log(firstUniqChar("aadadaad")); // => -1
