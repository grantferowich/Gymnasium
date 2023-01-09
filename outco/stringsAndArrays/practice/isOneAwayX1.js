// given two strings write a function that says if the two words are one character apart
// determine if one insertion, removal, or replacement would make two strings equal
// ("pale","ple") => true [one insertion different]
// ("pale", "bake") => false [two replacements different]
// ("apple", "aple") => true [one insertion different]
// ("pales", "pale") => true [one removal different]


const isOneEditAwayX1 = (string1, string2) => {
    let edits = 0
    let x = 0;
    while ( x < string1.length){
        let char1 = string1[x];
        let char2 = string2[x];
        console.log(char1)
        console.log(char2)
        if (char1 !== char2){
            console.log('edits changing')
            edits++
        }
        x++;
    }
    if (edits > 1){
        return false
    }
    return true;

}

const isOneAwayX1 = (string1, string2) => {
    if (string1.length === string2.length){
        return isOneEditAwayX1(string1, string2);
    }
    if (string1.length - string2.length === 1){
        return isOneInsertionOrDeletionAway(string1, string2);
    }
    if (string1.length - string2.legnth === -1){
        return isOneInsertionOrDeletionAway(string1, string2);
    }
    if (string1.length - string1.length > 1 || string1.length - string1.length < -1){
        return false
    }
}

// if the two strings are the same length and more than one char
// between the two strings is different
// return false


console.log(isOneAwayX1("pale", "bake")); // false since p and k must change | actual: false
console.log(isOneAwayX1("pale", "bale")); // true | actual: true




