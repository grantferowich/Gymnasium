// for a string with a number, k, and a series of letters
// return the longest substring with k unique chars
// kUniqueChars("2eceba") => 3


practiceKUniqueCharacters = (s) => {
    let k = s[0];
    let str = s.substring([s1], s.length);

    let startOfWindow = 0;
    let currentWindowLength = 0;
    let hash = {};
    let maxLength = 1

    for (let i = 0; i < str.length; i++){
        let char = s[i];
        hash[char] = true;

        if (hash.keys > k){
            delete hash;
            startOfWindow++;
        }

        currentWindowLength = i - startOfWindow;
        maxLength = Math.max(currentWindowLength, maxLength)
    }

    return maxLength;
}

kUniqueChars("2eceba")