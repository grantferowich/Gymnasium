
const isOneAwayX2 = (string1, string2) => {
    if (Math.abs(string1.length - string2.length) > 1){
        return false;
    }
    let edits = 0;
    let x = 0;
    let y = 0;
    while (x < string1.length && y < string2.length){
        let char1 = string1[x];
        let char2 = string2[y];
        
        if (char1 !== char2){
            if (edits === 1){
                return false;
            }
            if (string1.length > string2.length){
                x++;
            } else if (string2.length > string1.length){
                y++;
            } 
            else {
                x++;
                y++;
            }
            edits++;
        }
        x++
        y++
    }

    if (x < string1.length || y < string2.length){
        edits++;
    }

    return (edits == 1)
}

// console.log(isOneAwayX2("pale", "bake")); // false since p and k must change | actual: false
// console.log(isOneAwayX2("pale", "bale")); // true | actual: true
// console.log(isOneAwayX2('pales', 'pales')) // true
// console.log(isOneAwayX2('apple', 'aple')) // true
console.log(isOneAwayX2('apples', 'aple')) // false
// console.log(isOneAwayX2('wakeforestuniversity', 'wkeforestuniversity'))  // true

