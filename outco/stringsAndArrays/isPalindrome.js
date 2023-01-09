//Successfully tested the function 1/9/23

const isPalindrome = (s) => {
    let status = false;
    for (let i = 0; i < s.length; i++){
        if (s.charAt(i) == s.charAt(s.length-1-i)){
            status = true;
        } else 
            break;
    }

    console.log('status', status);
    return status; 
}

console.log(isPalindrome('hannah')) // expected output: true
