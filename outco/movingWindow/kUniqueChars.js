// for a string with a number, k, and a series of letters
// return the longest substring with k unique chars
// kUniqueChars("2eceba") => 3
// "3aabbcc" => 6
// 3aaabbb  => return invalid input
// I: 1 string
// O: 1 integer
// C: optimize
// E: empty string.

const kUniqueChars = (s) => {
    let k = parseInt(s[0]);
    let str = s.slice(1)
 
   let counts = {}
   

   let x = 0;
   while (x < str.length){
    let char = str[x];
    counts[char] = counts[char] + 1 || 1;
    x++;
   }
   if (Object.keys(counts).length < k){
    return -1;
   }

    let startOfWindow = 0;
    let currentWindowLength = 0;
    let hash = {};
    let maxLength = 1

    for (let endOfWindow = 0; endOfWindow < str.length; endOfWindow++){
        let char = str[endOfWindow];
        if (!hash[char]){
            hash[char] = true;
            currentWindowLength++;
        }
        // stop increasing window length when the number of keys exceeds k
        if (currentWindowLength > k){
            // hash.clear();
            delete hash[str[startOfWindow]];
            currentWindowLength--
            startOfWindow++;
        }
        maxLength = Math.max(maxLength, endOfWindow - startOfWindow);
    }
    return maxLength;
}

console.log(kUniqueChars("2eceba")) // 3 // OK 
console.log(kUniqueChars("3aaabbb")) // -1
console.log(kUniqueChars("3aabbxxyyy")) // 7