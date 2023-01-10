// Given A and B take the difference of A and B to find the greatest common divisor.
// To find the GCD of 78 and 52 

// (A , B)
// (78, 52 ) 78 - 52 = 26
// (52, 26) 52 -26 = 26
// (26, 26) 26-26 = 0
// (26, 0)  ==> // return console.log(26)
// Euclid's algorithm states the GCD of (A, 0) will always be A. 

// if a is not larger than b
// swap A and B
// Complexity Analysis
// Time Complexity: O(logN)
// Space Complexity: O(1)

const gcd = (a,b) => {
    // ensure inputs are positive
    if (a < 0) { a *= -1};
    if (b < 0) { b *= -1};

    // ensure A is larger than B
    if ( a < b){
        [a,b] = [b,a]
    }

    // for (A,B) take the difference of the two integers
    // then set the new pair to (b, difference)
    while (b > 0){
        let temp;
        temp = a - b;
        [a,b] = [b,temp];
    }
    return console.log(a);
}

gcd(78,52)
// expected output: 26
// actual output: 26