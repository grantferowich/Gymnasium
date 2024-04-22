/* 
Substring

Write a program to determine whether an input string is a substring of another
input string. ( For example, "bat" is a substring of "abate", but not of "beat".) You
may use any language you like.


input: "ak" and "wake"
output: true, ak is a substring of wake

input: 'wakeforest' and 'wakeforestuniversity'
output: true

first, find a spot where the letter in the long word is the same as the first letter 
in the short string. Then, iterate through the long word. At each iteration, check
whether the letter at the index is the same as the letter in the shortWord.
*/

const substring = (shortWord, longWord) => {
    let startIndex = -1;
    let x = 0;
    while (x < longWord.length){
        if (longWord[x] === shortWord[0]){
            startIndex = x;
            break;
        }
        x++;
    }
    let subWord = longWord.slice(startIndex);
    x = 0;
    while (x < shortWord.length){
        if (subWord[x] !== shortWord[x]){
            return false;
        }
        x++;
    }
    return true;
}
let longWord1 = 'wake';
let shortWord1 = 'ak';
let result1ToF = substring(shortWord1, longWord1);
console.log('"ak" is a substring of "wake?" (Expect true.)')
console.log('result', result1ToF);

const longWord2Str = "wake forest";
const shortWord2Str = "gr";
const result2ToF = substring(shortWord2Str, longWord2Str);
console.log('"gr" is a substring of "wake forest?"')
console.log('Result:', result2ToF) 