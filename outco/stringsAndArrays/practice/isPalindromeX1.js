/* successfully tested the function 1/9/23 */
// input: string
// output: boolean returning the status of whether a word is a palindrome
// test 1: hannah - true
// test 2: dog - false
// test 3: aba - true

const isPalindromeX1 = (string) => {
    string = string.replace(/[^\w]/g,"").toLowerCase()
    console.log(string)
    let x = 0;
    while (x < string.length - 1){
        let frontChar = string[x];
        let lastChar = string[string.length - 1 - x];
        if ( frontChar !== lastChar){
            return false
        }
        x++
    }
    return true;
}

console.log(isPalindromeX1('hannah')) // expected output: true | actual output: true
console.log(isPalindromeX1('dog')) // expected output: false | actual output: false
console.log(isPalindromeX1('aba')) // expected output: true | actual output: true
console.log(isPalindromeX1('A man, a plan, a canal: Panama')) // expected output: true