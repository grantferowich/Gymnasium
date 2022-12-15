// Minimum Window Substring

// tested the solution successfully on 12/15/22
// the solution was tested with "ADOBECODEBANC", "ABC" as the test case
// what if the target contains repeats?
// for example, what if the target is "AABC"?

const minimumWindowSubstringAdvanced = (string, target) => {

    let result = [0, Infinity];
    let counts = {};

    // targetChars is the # of target characters NOT present in the substring
    // decrement targetChars when window expands to include a *unique* target char 
    // console.log('target', target)
    let targetChars = target.length;

    // init counts hash
    for (let i = 0; i < target.length; i++){
        let targetChar = target[i];
        counts[targetChar] = 0;
    }
    
    let left = 0;
    for ( let right = 0; right < string.length; right++){

        // is current char a target char?
        if (string[right] in counts){

            // if current char is a yet-unseen target char 
            if (counts[string[right]] === 0){
                targetChars -= 1;
            }
            // if targetChar is unique, increment 
            counts[string[right]] += 1;
        }

        while (targetChars === 0){
            if ((left - right) < (result[1] -result[0])){
                result[0] = left;
                result[1] = right;
            }
            if (string[left] in counts){
                counts[string[left]] -= 1;
                if (counts[string[left]] === 0){
                    targetChars += 1;
                }
            }
            left++
        }
    }
    return result[1] === Infinity ? "" : string.slice(result[0], result[1]+1)
}

console.log(minimumWindowSubstringAdvanced("ADOBECODEBANC", "ABC"))