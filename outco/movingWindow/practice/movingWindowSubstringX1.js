// successfully tested the function 1/18/23. 

const minimumWindowSubstring2 = (string, target) => {

    // if (!string.includes(target)){ return ""}

    let l = 0
    let r = 0
    // assume the string at r does not have a target
    // if the string at l has the target then decrement missingCharNum
    let missingCharNum = target.length;
    let counts = {};
    let result = [0, Infinity]

    // create hash map
    for (let x = 0; x < target.length; x++){
        let char = target[x];
        counts[char] = counts[char] + 1 || 1;
    }

    while (r < string.length){
        // as long as the window does not have all the target chars then do stuff
        // hunting logic 
        if (missingCharNum > 0){
            let rChar = string[r]
            // if the present char is a target char do stuff - decrement misingCharNum
            if (rChar in counts){
                if (counts[rChar] > 0){
                    missingCharNum--;
                } 
                counts[rChar]--;
            }
        }

        // once the window has all the target chars, 
        // update the result
        // move the left index up
        // set the missingCharNum back to target.length

        //catch up logic 
        while (missingCharNum === 0){
            // result is updated
            if ((result[1] - result[0]) > (r - l)){
                result = [l, r];
            }
            let lChar = string[l];

            // so in both while loops, the present char is
            // checked against counts hash containing target chars
            if (lChar in counts){
                // reset the value in the counts hash
                counts[lChar]++;
                // update the missingCharNum if lChar is one of the target chars
                if (counts[lChar] > 0){
                    missingCharNum++;
                }
            }l++
        } 
        r++
    }

    return string.slice(result[0], result[1] + 1);
}

// the second version of the solution written from 114 to 168 was successfully tested with the following 
// test case 12/9/22. 
console.log(minimumWindowSubstring2('ADOBECODEBANC', 'ABC')) // BANC // [9,12]
console.log(minimumWindowSubstring2('GOOGLEHHOOMEPAGEDOCUMENT', 'OOE')) // OOME [8,11]
console.log(minimumWindowSubstring2('AADOBECODEBAANC', 'AABC')) //  BAANC