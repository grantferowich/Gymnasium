/* successfully tested the function 1/9/23 */

const isPalindromeX2 = (s) => {
    let status = false;
    for (let i = 0; i < s.length; i++){
        if (s[i] == s[s.length-1-i]){
            status = true;
        } else 
            break;
    }

    console.log('status', status);
    return status; 
}

console.log(isPalindromeX2('hannah'))