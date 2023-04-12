// successfully tested the function 2/2/2023.

const isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
      for (let x = 0; x <= s.length; x++){
          if (s[x] !== s[s.length - 1 - x]){
              return false
          }
      }
      return true
};

console.log(isPalindrome('hannah')) // expected output: true | actual output: true
console.log(isPalindrome('dog')) // expected output: false | actual output: false
console.log(isPalindrome('aba')) // expected output: true | actual output: true
console.log(isPalindrome('A man, a plan, a canal: Panama')) // expected output: true