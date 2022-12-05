const caesarCipher = (string, key) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newWord = "";

  for (let i = 0; i < string.length; i++) {
    let oldIndex = alphabet.indexOf(string[i]);
    let newIndex = (oldIndex + key) % 26;
    let newLetter = alphabet[newIndex];
    newWord += newLetter;
  }

  return newWord;
};

console.log(caesarCipher("apple", 1)); // => "bqqmf" :D

console.log(caesarCipher("bootcamp", 2)); // => "dqqvecor" :D
console.log(caesarCipher("zebra", 4)); // => "difve"
