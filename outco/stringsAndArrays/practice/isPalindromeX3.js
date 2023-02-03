
// successfully tested the function 2/2/23
var isPalindromeX3 = function(s) {
    if (s === ''){return true}
    s = s.replace(/[^\w]/g,'').toLowerCase()
    for (let x = 0; x <= s.length; x++){
        if (s[x] !== s[s.length - 1 - x]){
            return false
        }
    }
    return true
};

let s = "A man, a plan, a canal: Panama" // true
console.log(isPalindrome(s)) // true 
let k = 'ab_a'  // true
console.log(isPalindromeX3(k))

