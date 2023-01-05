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

// input: 2 strings
// output: boolean
// constraints: optimize
// edge cases: empty string

// if insert makes two strings equal, then s1's current char should be equal to s2's next char
// if removal makes two strings equal, then s1's next char should be equal to s1's current char
// it replace makes two strings equal, then s1's next character should be equal to s2's next char

// maximum of one edit 
// if the difference in the lengths of the two strings is greater than max edit, return false

// to keep track of the two strings likeness
// decrement max edits whenever a change is made to s1
// if max edits is negative return false 

const isOneAway = (s1, s2) => {
    let edits = 1;
    let maxLength = Math.max(s1.length, s2.length);
    let diff = Math.abs(s1-s2);

    if (diff > edits ){
        return false;
    }

    for (let i=0, j=0; i < maxLength || j < maxLength; i++, j++){
            let char1 = s1[i];
            let char2 = s2[j];
            if (char1 !== char2) {
                edits--;
                if ( edits < 0) return false;
                if ( char1 === s2[j+1] ){ // inserted 
                    j++
                } else if ( char2 === s1[i+1]){ // removed 
                    i++
                }
            }
    }
    return true;    
}


