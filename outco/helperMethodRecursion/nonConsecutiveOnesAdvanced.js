/**
 * Successfully tested the function 1/14/23.
 * 230 - Non-Consecutive Ones
 * Given a positive integer n, return an array of all the binary strings of length n that DO NOT contain consecutive 1s.
 * 
 * 
 * The following function implements conditional recursion.
 * The idea behind conditional recursion is that a recursive call
 * is only made when a certain condition is met.
 * This function uses multiple recursion. 
 * One of the recursion calls is nested 
 * in an if statement. 
 * /
 * 
 * 
 * Input: 2
Output: ["00", "01", "10"]

Input: 3
Output: ["000", "001", "010", "100", "101"]
 * 
 * 
 */


const nonConsecutiveOnesAdvanced = (n) => {
    let array = [];

    const buildStrings = (substring) => {
        if (substring.length === n){
            array.push(substring);
            return
        }
        buildStrings(substring + "0")
        if (substring[substring.length - 1] !== "1"){
            buildStrings(substring + "1")
        }
    }

    buildStrings("");
    return array
}

console.log(nonConsecutiveOnesAdvanced(4))
console.log(nonConsecutiveOnesAdvanced(2))