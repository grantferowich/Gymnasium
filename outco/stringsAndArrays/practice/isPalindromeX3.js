

var isPalindromeX3 = function(s) {
    s = s.replace(/[^\w]/g,'').toLowerCase()
    for (let x = 0; x <= s.length; x++){
        if (s[x] !== s[s.length - 1 - x]){
            return false
        }
    }
    return true
};

s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))