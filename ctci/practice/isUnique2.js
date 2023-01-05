// given a string of characters
// return a boolean stating if the string is wholly composed of unique characters
// isUnique2("aaaaa") => false
// isUnique2("abcdefg") => true
const isUnique2 = (s) => {
    let arr = [];
    let x = s.length;
    for (let i = 0; i < x; i++){
        let char = s[i];
        if (!arr.includes(char)){
            arr.push(char)
        } else if (arr.includes(char)){
            return false 
        }
    }

    return true
}

module.exports = isUnique2