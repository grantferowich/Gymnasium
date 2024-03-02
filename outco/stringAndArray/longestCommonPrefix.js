// Successfully tested the function 2/1/23

const longestCommonPrefix = ( strings ) => {
    if (strings.length === 0){ return ''};
    if (strings.length === 1) {return strings[0]}

    strings.sort();
    let output = '';
    for (let x = 0; x < strings[0].length; x++){
        if (strings[0][x] === strings[strings.length-1][x]){
            output += strings[0][x];
        } else {
            break;
        }
    }
    return output
}

const input = ['wakeup', 'wake', 'wakie'];
console.log(longestCommonPrefix(input)) // 'wak'