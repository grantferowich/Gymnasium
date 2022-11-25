// given a string return the length of the longest unique substring 
// longestSubstr4("aabcc") // 3 

const longestSubstr4 = (s) => {
    let hash = {};
    let keys = Object.keys(hash);
    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if (!keys.includes(char)) {
            hash[char] = true;
        } 
    }
    return Object.keys(hash).length;
}

longestSubstr4("aabcc")
