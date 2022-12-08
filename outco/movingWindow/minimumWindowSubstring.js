// word = A D O B E C O D E B A N C
//        0 1 2 3 4 5 6 7 8 9 10 11 12             
// target = ABC




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
        // the left var changes inside the second while loop
        
        while (missingChars === 0){
                console.log('right', right)
                console.log('left', left)
                if ((right - left) < (result[1] - result[0])){
                    result = [left, right]
                }
                let lChar = word[left];
                if (lChar in counts ) {
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







// given an array of positive integers and a target value,
// return true if there is a subarray of consecutive elements that
// sum up to this target value

// sliding window at left and right
// while target >= 0
// if (target === 0) {
//     return true
// } 

// input: [ 8,3,7,9,10,1,13 ], 50 ==> false 
// input: [ 6,12,1,7,5,2,3 ], 14 => true 

