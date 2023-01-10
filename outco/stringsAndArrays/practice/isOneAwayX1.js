// given two strings write a function that says if the two words are one character apart
// determine if one insertion, removal, or replacement would make two strings equal
// ("pale","ple") => true [one insertion different]
// ("pale", "bake") => false [two replacements different]
// ("apple", "aple") => true [one insertion different]
// ("pales", "pale") => true [one removal different]




const isOneAwayX1 = (string1, string2) => {
    if (string1.length === string2.length){
        return isOneEditAwayX1(string1, string2);
    }
    if (string1.length - string2.length === 1){
        return isOneInsertionOrDeletionAwayX1(string1, string2);
    }
    if (string1.length - string2.legnth === -1){
        return isOneInsertionOrDeletionAwayX1(string1, string2);
    }
    if (string1.length - string1.length > 1 || string1.length - string1.length < -1){
        return false
    }
}

const isOneEditAwayX1 = (string1, string2) => {
    let edits = 0
    let x = 0;
    while ( x < string1.length){
        let char1 = string1[x];
        let char2 = string2[x];
        if (char1 !== char2){
            edits++
        }
        x++;
    }
    if (edits > 1){
        return false
    }
    return true;

}

const isOneInsertionOrDeletionAwayX1 = (string1, string2) => {
    let x = 0;
    let y = 0
    while ( x < string1.length && y < string2.length){
        let char1 = string1[x];
        let char2 = string2[y];
        if (char1 !== char2){
            if (x !== y){
                return false; 
            }
            y++
        } else {
            x++;
            y++;
        }
       
    }
    return true;
}


// if the two strings are the same length and more than one char
// between the two strings is different
// return false


console.log(isOneAwayX1("pale", "bake")); // false since p and k must change | actual: false
console.log(isOneAwayX1("pale", "bale")); // true | actual: true
console.log(isOneAwayX1('pales', 'pales')) // true
console.log(isOneAwayX1('apple', 'aple')) // true
console.log(isOneAwayX1('wakeforestuniversity', 'wkeforestuniversity')) // true




