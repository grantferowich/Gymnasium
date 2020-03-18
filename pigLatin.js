const { PerformanceObserver, performance } = require("perf_hooks");
var t0 = performance.now();

// Pig latin translation uses the following rules:
// - for words that start with a vowel, add 'yay' to the end
// - for words that start with a nonvowel, move all letters before the first vowel to the end of the word and add 'ay'

const pigLatin = word => {
  const vowels = "aeiou";

  if (word[0].includes(vowels)) {
    return console.log(word + "yay");
  }

  //   else {
  //     for (let i = 0; i < word.length; i++) {
  //       if (word[i].includes(vowels)) {
  //         return word.slice(i, -1) + word.slice(0, i) + "ay";
  //       }
  //     }
  //   }
};

console.log(pigLatin("apple")); // => "appleyay"
console.log(pigLatin("eat")); // => "eatyay"
// console.log(pigLatin("banana")); // => "ananabay"
// console.log(pigLatin("trash")); // => "ashtray"

// const vowels = "aeiou";
// const word = "grant";
// console.log(word[1].includes(vowels));

var t1 = performance.now();
console.log("Call to pigLatin took " + (t1 - t0) + " milliseconds.");
