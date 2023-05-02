// Successfully tested the function 1/14/23. 
// for a string with a number, k, and a series of letters
// return the longest substring with k unique chars
// kUniqueChars("2eceba") => 3

// I: 1 string
// O: 1 integer
// C: optimize
// E: empty string.

const kUniqueCharacters = (s) => {
    let k = s[0];
    let str = s.slice(1, s.length -1)
   
    let startOfWindow = 0;
    let currentWindowLength = 0;
    let hash = {};
    let maxLength = 1;
    let counts = {};

    let x = 0;
   
   if (Object.keys(counts).length < k){
    return -1;
   }
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        hash[char] = true;
        // stop increasing window length when the number of keys exceeds k
        if (hash.keys > k){
            // hash.clear();
            hash = null;
            startOfWindow++;
        }
        currentWindowLength = i - startOfWindow;
        maxLength = Math.max(currentWindowLength, maxLength)
    }
    // console.log(maxLength)
    return maxLength;
}

console.log(kUniqueCharacters("2eceba")) // 3
console.log(kUniqueCharacters("3aaabbb")) // -1
console.log(kUniqueCharacters("3aabbxxyyy")) // 7
// module.exports = kUniqueChars