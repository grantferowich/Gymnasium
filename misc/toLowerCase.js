//Example
// Input: "LOVELY"
//Output: "lovely"

var toLowerCase = function(string) {
  let s = "";
  for (let j = 0; j < string.length; j++) {
    s += string[j].toLowerCase;
  }
  return s;
};
