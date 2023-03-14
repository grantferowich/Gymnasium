/* 
Api Call

Successfully tested the function 3/13/23.

*/
async function apicall() { return new Promise(resolve => {
    setTimeout(() => {resolve('b')}, 50);
    })};
    
    
async function logger(){
      setTimeout(() => console.log('a'), 10);
      console.log(await apicall());
      console.log('c');
    };

/* TESTS */
const result = logger()
console.log('result', result)

// result Promise { <pending> }
// a
// b
// c ✓
