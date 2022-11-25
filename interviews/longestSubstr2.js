//return the length of the longest substring of unique characters given a string
//longestSubstr2("aabcc") // 3 

const longestSubstr2 = (s) => {
    let arr = [];
    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if (!arr.includes(char)){
            arr.push(char);
        } 
    }
    return arr.length
}
module.exports = longestSubstr2

