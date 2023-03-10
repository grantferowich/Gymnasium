/* 

Conversion

CTCI 5.06

*/

const conversion = ( a, b ) => {
    
    let count = 0;
    let x = a ^ b;
    x = x.toString(2);
    
    for (let i = 0; i <= x.length; i++){
        
        if (x[i] === '1'){
            count++;
        }
        
    }

    return count;
}

/* TESTS */

let data1 = conversion(0b100, 0b111)
console.log('Test 1:', data1) // 2

let data2 = conversion(0b101, 0b100)
console.log('Test 2:', data2) // 1