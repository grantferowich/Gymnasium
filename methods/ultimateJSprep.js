/**
 * variables
 * */ 

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
// console.log(y)

const x = [1, 1, 2, 3, 5, 8, 13, 21, 34];

const y = x.map(function(element){ return element*element})
console.log(y)
