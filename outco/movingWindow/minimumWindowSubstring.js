// Successfully tested the function 1/18/23.
// word = A D O B E C O D E B A N C
//        0 1 2 3 4 5 6 7 8 9 10 11 12             
// target = ABC

// the approach here introduces the moving window with two pointers
// as the window moves there are checks against the missingChars var
// there are also checks against the counts hash
// the counts hash is one that you, the programmer, constrcuts

//Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
// of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.



const minimumWindowSubstring = (word, target) => {
    let left = 0;
    let right = 0;
    let result = [0, Infinity]

    const counts = {};
    let missingChars = target.length;

    // build counts hash from target input
    for (let i = 0; i < target.length; i++){
        let char = target[i];
        counts[char] = counts[char] + 1 || 1;
    }

    while ( right < word.length) {
        if (missingChars > 0) {
            // hunting phase
            let rChar = word[right];
            if (rChar in counts) {
                if (counts[rChar] > 0){
                    missingChars--;
                }
                counts[rChar]--;
            }
        }
        // catchup phase // the catchup phase is where the left var changes
        // catchup phase is where the result is update 
        // the left var changes inside the second while loop
        
        while (missingChars === 0){

                // update result
                if ((right - left) < (result[1] - result[0])){
                    result = [left, right]
                }
                let lChar = word[left];

                // this step is a tiny bit fuzzy (12/8/22): I don't know | je nais se quois "I know not what"
                // if lChar is one of the targets, then reset the count of lChar
                // and also incremenet missingCharNum to reset the missingCharnum
                if (lChar in counts) {
                    counts[lChar]++;
                    if (counts[lChar] > 0){
                        missingChars++ 
                    }
                }left++;
        }
        // the right var changes inside the first while loop at the very end of the loop
        right++       
    }

    // return result;
    if (result[1] === Infinity) {
        return "";
    } else {
        // N.B. here JS's slice method from x to y is exclusive of y so 1 must be added for y to be included
        return word.slice(result[0], result[1] +1)
    }
}


console.log(minimumWindowSubstring('ADOBECODEBANC', 'ABC')) // BANC is the smallest substring containing the target
console.log(minimumWindowSubstring('DOG', 'LAKE')) // ""
console.log(minimumWindowSubstring('AADOBECODEBAANC', 'AABC')) //  BAANC




//Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
// of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.




// input is a string and a target
// suppose the string is g o o g l e h h o o m  e  p  a  g  e  d  o  c  u  m  e  n  t
//                       0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
// suppose the target is ooe
//  the array of chars from 8 to 11 is the shortest window with all the target chars




