// this code returned [0,5] when it should have returned [9,12]
// this code is buggy and was not successfully tested
// this function was worked on 12/13/22

// const minimumWindowSubstringPractice1 = (word, target) => {
//     let result = [0, Infinity];
//     const counts = {};
//     let missingChars = target.length;

//     for (let i = 0; i < target.length; i++){
//         let char = target[i];
//         if (!counts[char]){
//             counts[char] = 1
//         } else [
//             counts[char]++
//         ]
//     }

//     for ( let right = 0; right < word.length; right++){
        
//         // hunting phase logic
//         if (missingChars > 0){
//             let rChar = word[right];
//             if (rChar in counts) {
//                 if (counts[rChar] > 0){
//                     missingChars--;
//                 }
//                 counts[rChar];
//             }
//         }


//         for (let left = 0; left < word.length; left++){
//             //catchup phase logic
//             if (missingChars === 0){
//             // update result
//             if (right-left < result[1] - result[0]){
//             result = [left, right]
//             }
//             let lChar = word[left]; 
//             if (lChar in counts){
//                  counts[lChar]++;
//                 if (counts[lChar] > 0){
//                     missingChars++;
//                 }
//             }
        
//             }
//         }   
//     }
//     return result
// }

// console.log(minimumWindowSubstringPractice1('ADOBECODEBANC', 'ABC')) // BANC is the smallest substring containing the target