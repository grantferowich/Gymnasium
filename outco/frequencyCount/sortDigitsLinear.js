/**
 * 
 * Given a number, return the number sorted in place. Exclude 0s.
 * 
 * i.e. 9870 => 789
 * 
 * Successfully tested the solution 12/22/22. 
 * 
 * 
 * 
 * 
 * 
 * */ 


const sortDigitsLinear = (number) => {
    
    let hash = {};
    let final = 0;

    // build up hash by setting the key as the digit in 
    while (number > 0){
        // "access" integer from right to left as the remainder of
        // number divided by 10
        
        let digit = number % 10;
        // "pop" the digit off the number using the modulo operator

        console.log('digit', digit)
        hash[digit] = hash[digit] + 1 | 1;
        number = parseInt(number/10);
    }
    let power = 0;
    for (let x = 10; x >= 0; x--){
        if (hash[x] !== undefined){
            while (hash[x] >=1){
                (console.log(Math.pow(10,power)))
                final += x * Math.pow(10, power);
                power += 1;
                hash[x] -= 1;
            }
        }
    }
    return final;
}

console.log(sortDigitsLinear(8970))
console.log(sortDigitsLinear(32445))