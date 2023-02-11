// successfully tested the function 2/2/2023.

const isPalindrome = (s) => {

    s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    let l = 0;
    let r = s.length - 1;
    while (l < r){
        if (s[l] !== s[r]){
            return false
        }
        if (s[l] === s[r]){
            l++
            r--
        }
    }
    return true;
};

console.log(isPalindrome('hannah')) // expected output: true | actual output: true
console.log(isPalindrome('dog')) // expected output: false | actual output: false
console.log(isPalindrome('aba')) // expected output: true | actual output: true
console.log(isPalindrome('A man, a plan, a canal: Panama')) // expected output: true