//check against this version 

const minimumWindowSubstring = (word, target) => {

    let left = 0;
    let right = 0;
    let result = [0,Infinity]

    const counts = {};
    let missingChars = target.length;

    // for (let i = 0; i < target.length; i++){
    //     let char = target[i];
    //     if (char in counts) {
    //         counts[char]++;
    //     } else {
    //         counts[char] = 1
    //     }
    // }

    // build counts hash from target input
    for (let i = 0; i < target.length; i++){
        let char = target[i];
        counts[char] = counts[char] + 1 || 1;
    }

    while (right < word.length) {
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

console.log(minimumWindowSubstring('ADOBECODEBANC', 'ABC')) // BANC
console.log(minimumWindowSubstring('DOG', 'LAKE')) // ""
console.log(minimumWindowSubstring('AADOBECODEBAANC', 'AABC')) //  BAANC