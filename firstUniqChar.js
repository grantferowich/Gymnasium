const firstUniqChar = s => {
  let currentIdx = 0;

  while (currentIdx < s.length) {
    for (let i = 1; i < s.length; i++) {
      let remainder = s.slice(i);
      if (!remainder.includes(s[currentIdx])) {
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
