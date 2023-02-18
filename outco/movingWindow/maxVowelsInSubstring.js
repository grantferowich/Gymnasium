/* 

1, initialize left most window
2, move the window
3, return the result

2 Types of Fixed Size Moving Window
1. Counting 
2. Optimization 


Given a string s and an integer k
return the max number of vowel letters
in any substring of s with length k
*/

const maxVowel = (s, k) =>{

    let right = 0;
    let left = 0;
    let local = 0;
    let ultimate = -Infinity

    while (right < s.length){
        
        if (right - left >= k){
            if (s[left] === 'a' || s[left] === 'e' || s[left] === 'i' || s[left] === 'o' || s[left] === 'u'){
                local--
            }
            left++
        }

        if (right - left < k){
            if (s[right] === 'a' || s[right] === 'e' || s[right] === 'i' || s[right] === 'o' || s[right] === 'u'){
                    local++
            }
        }
        ultimate = Math.max(local, ultimate)
        right++
    }    
    return ultimate;
}

/* TEST */

let s1 = 'abciiidef' 
let k1 = 3
// output 3
// 'iii' gives 3 vowels

let s2 = 'aeiou' 
let k2 = 2
// output 2
// any substring gives 2 vowels

let s3 = 'leetcode' 
let k3 = 3
// output 2
// 'lee' and 'ode' contain 2

console.log(maxVowel( s1, k1 )) // 3
console.log(maxVowel( s2, k2 )) // 2
console.log(maxVowel( s3, k3 )) // 2
