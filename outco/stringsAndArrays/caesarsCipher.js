// CAESAR'S CIPHER
// successfully tested the function 1/10/23
// Given a string and an integer k
// return a string 

// the function should re-assign each letter by k places in the alphabet
// when the input is apple and k is 2 then "a" becomes "c" in the cipher
// p becomes r
// l become n
// e becomes g
// for the input apple the expected output is crrng

const caesarCipher = (string, k) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryptedWord = "";
  for (let i = 0; i < string.length; i++) {
    let oldIndex = alphabet.indexOf(string[i]);
    let newIndex = (oldIndex + k) % 26;
    let newLetter = alphabet[newIndex];
    encryptedWord += newLetter;
  }
  return encryptedWord;
};
console.log(caesarCipher("apple", 2)); // => "crrng" :D
console.log(caesarCipher("bootcamp", 2)); // => "dqqvecor" :D
console.log(caesarCipher("zebra", 4)); // => "difve"
