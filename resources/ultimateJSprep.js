// *************
// VARIABLES
// *************

// var x = 4;
// var x = 5;
// console.log(x)
// outputs 5 since var variables are re-declarable and updateable

// let y = 21;
// let y = 34 // syntax error - let vars may not be re-declared
// console.log(y)


// const z = 1;
// const z = 2; const vars may not be re-declared
// console.log(z) 

// const a; // Syntax error: const variables must be initialized at declaration;
//  console.log(a)

// let d = 9;
// let e = '9';
// console.log(d == e); // expected : true
// console.log(d === e); // expected : false 

// **********
// ARRAYS
// **********

// arrays store vars
// let a = 1;
// const b = 2;
// var c = 'wake forest';
// const array = [a,b,c];
// console.log(array)
// const array = [1,2, 'wake forest'];
// console.log(array)

// const x = [1, 1, 2, 3, 5, 8, 13, 21, 34];

// const y = x.map(function(element){ return element})
// console.log(y)  // [1, 1, 2, 3, 5, 8, 13, 21, 34]

// const x = [1, 1, 2, 3, 5, 8, 13, 21, 34];

// const y = x.map(function(element){ return element*element})
// console.log(y) // [
//     1,  1,   4,   9,
//    25, 64, 169, 441,
//  1156
// ]


// filter out words shorter than 6 chars
// const words = ['wake', 'forest', 'saint charles']
// const longs = words.filter((word) => word.length > 6)
// console.log(longs) // 'saint charles'

// let array = [];

// for (let x = 0; x < words.length; x++){
//     let word = words[x]
//     if (word.length > 6) {
//         array.push(word)
//     }
// }
// console.log(array)

