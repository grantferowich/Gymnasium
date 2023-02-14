// const { PerformanceObserver, performance } = require("perf_hooks");
var t0 = performance.now();

// Pig latin translation uses the following rules:
// - for words that start with a vowel, add 'yay' to the end
// - for words that start with a nonvowel,
// move all letters before the first vowel to the end of the word and add 'ay'

// input: a word
// output: a word 
// constraints: O(N) run time, O(N) space complexity
// edge cases: return "" for empty strings

// Succesfully tested the solution on 12/10/22.
const pigLatin = (word) => {
  if (word.length === 0) {
    return ""
  }
  let arr = word.split('')
  // if the array at index 0 is a vowel
  if (arr[0] == "a" || arr[0] =="e"|| arr[0] == "i" || arr[0] == "o" || arr[0] == "u"){
    return word + "yay"
  }
  // loop until a vowel is found at index i
  for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "a" || arr[i] =="e"|| arr[i] == "i" || arr[i] == "o" || arr[i] == "u") {
          let fragment = arr.slice(0, i);
          let main = arr.slice(i, word.length+1);
          return main.join("") + fragment.join("") + "ay";
        }
      }
};

console.log(pigLatin("apple")); // => "appleyay"
console.log(pigLatin("")); // => ""
console.log(pigLatin("eat")); // => "eatyay"
console.log(pigLatin("banana")); // => "ananabay"
console.log(pigLatin("trash")); // => "ashtray"

var t1 = performance.now();
console.log("Call to pigLatin took " + (t1 - t0) + " milliseconds.");
