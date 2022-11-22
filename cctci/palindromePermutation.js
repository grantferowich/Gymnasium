// Given a string write a function to determine if the string
// is a permutation of a palindrom

// tact coa => true: taco cat, atco cta
// hannah => true, hannah, nahhan


// Solution: Compare the first character with the last character
// if the two characters are the same, then increment 
// 


const palindromePermutation = (s) => {
    let hash = {}

    for (let i = 0; i < s.length; i++){
        let k = s[i]; 
        if ( k !== " "){
            hash[k] = hash[k] + 1 || 1;
        }
        
    }

    let odds = 0;
    for (let key in hash){
        if (hash[key] % 2 !== 0){
            odds = odds + 1 || 1;
        }
    }

    if (odds > 1 ){
        console.log("false");
        return false;
    } else {
        console.log('true')
        return true;
    }
}

palindromePermutation('hannah') // true
palindromePermutation('taco cat') // true
palindromePermutation('joe shmo') // false
palindromePermutation('h') // true
palindromePermutation("aannhh") // true