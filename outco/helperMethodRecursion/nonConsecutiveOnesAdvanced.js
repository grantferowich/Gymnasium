/**
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

    const recurse = (substring) => {
        if (substring.length === n){
            array.push(substring);
            return
        }
        recurse(substring + "0")
        if (substring[substring.length - 1] !== "1"){
            recurse(substring + "1")
        }
    }

    recurse("");
    return array
}

console.log(nonConsecutiveOnesAdvanced(4))