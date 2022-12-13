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


// console.log(minimumWindowSubstring('ADOBECODEBANC', 'ABC')) // BANC is the smallest substring containing the target
// console.log(minimumWindowSubstring('DOG', 'LAKE')) // ""




//Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
// of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.




// input is a string and a target
// suppose the string is g o o g l e h h o o m  e  p  a  g  e  d  o  c  u  m  e  n  t
//                       0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
// suppose the target is ooe
//  the array of chars from 8 to 11 is the shortest window with all the target chars





const minimumWindowSubstring2 = (string, target) => {

    // if (!string.includes(target)){ return ""}

    let l = 0
    let r = 0
    // assume the string at r does not have a target
    // if the string at l has the target then decrement missingCharNum
    let missingCharNum = target.length;
    let counts = {};
    let result = [0, Infinity]

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