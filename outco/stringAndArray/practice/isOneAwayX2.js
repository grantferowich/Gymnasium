// Successfully tested the function 1/21/23.
const isOneAwayX2 = (string1, string2) => {

    // check if the difference in lengths is greater than 1
    if (Math.abs(string1.length - string2.length) > 1){
        return false;
    }
    // keep track of total edits starting at 0
    let edits = 0;

    // init pointers to track location of input strings
    let x = 0;
    let y = 0;
    while (x < string1.length && y < string2.length){
        // isolate specific characters from both strings 
        let char1 = string1[x];
        let char2 = string2[y];
        
        // if the two chararacters are not identical do some stuff
        //  1, return out if edits already equals 1
        //  2, move the pointers depending on string lengths
                // generally, move the pointer on the longer string
                // otherwise move both pointers
        // 3, increment the edits state variable by 1 since the two chars do not match
        if (char1 !== char2){
            // if the number of edits is already 1
            if (edits === 1){
                // more than one edit is required to match the strings
                return false;
            }


            // if the string1 is longer move its pointer
            if (string1.length > string2.length){
                x++;
                // if the string2 is longer moves its pointer
            } else if (string2.length > string1.length){
                y++;
            } 
            // otherwise move both pointers
            else {
                x++;
                y++;
            }


            // incremenet edits 
            edits++;
        }

        x++
        y++
    }

    // increment edits if the strings are not the same size 
    if (x < string1.length || y < string2.length){
        edits++;
    }

    // return whether edits equals exactly 1
    return (edits == 1)
}


console.log(isOneAwayX2("pale", "bale")); // true | actual: true
console.log(isOneAwayX2('apple', 'aple')) // true
console.log(isOneAwayX2('wakeforestuniversity', 'wkeforestuniversity'))  // true
console.log(isOneAwayX2('wkeforestuniversity', 'wakeforestuniversity'))  // true
console.log(isOneAwayX2('apples', 'aple')) // false
console.log(isOneAwayX2("pale", "bake")); // false since p and k must change | actual: false
