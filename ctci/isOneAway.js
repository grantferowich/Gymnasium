// given two strings write a function that says if the two words are one character apart
// determine if one insertion, removal, or replacement would make two strings equal
// ("pale","ple") => true [one insertion different]
// ("pale", "bake") => false [two replacements different]
// ("apple", "aple") => true [one insertion different]
// ("pales", "pale") => true [one removal different]

// Solution 1: Compare the two strings
// Use a counter for number of different characters
// increment the counter when a difference is found
// validation 1: check if the lengths are different by more than one
// validation 2: check for replacements
// validation 3: check for insertions/removals

const isOneAway = (s1, s2) => {
    let numDiff = 0;
    let isOneAway;

     //validation 1
    if (Math.abs(s1.length-s2.length) > 1 ){
        isOneAway = false;
        return (console.log(isOneAway))
    }

    const numDiffCheck = (n) => {
        if (numDiff > 1){
            isOneAway = false;
            return (console.log(isOneAway))
        } else {
            isOneAway = true;
            return (console.log(isOneAway))
        }
    }

    // validation 2
    if (s1.length == s2.length){
        for (let i = 0; i < s1.length; i++){
            let char1 = s1[i];
            let char2 = s2[i];
            if (char1 !== char2) numDiff += 1; 
            numDiffCheck(numDiff);
        }
    } else {
        for (let i=0, j=0; i < Math.max(s1.length, s2.length) && j < Math.max(s1.length, s2.length); i++, j++){
            let char1 = s1[i];
            let char2 = s2[j];
            if (char1 !== char2) numDiff += 1;
            numDiffCheck(numDiff);
        }
    }





   
}

isOneAway("pale","ple") // true
isOneAway("pale", "bake") // false
isOneAway("apple", "aple") // true
isOneAway("pales", "pale") // true 
isOneAway("appple", "aple") // false 
