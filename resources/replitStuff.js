

/*
//input: csv file
//output: 
Some notes on Repl.it 1/16/23
Starting cursor position: 0
Operation: {"op": "insert", "chars": "Hello, human!"}
Output document: "Hello, human!"
Ending cursor position: 13
*/

let x = 'hello, human!';
// console.log(x.length);

// the delete function deletes all elements after the count
const deleteChars = (string, count) => {
    let array = string.split("");
    array.slice(count)
}

console.log(deleteChars('what is up?', 7)) // "What is?"
let y = "What is up?";
console.log(y.split(""));
console.log(y)
console.log('7:', y[7])

// CSV Parser
let input = "Name,Type,Pattern/Algorithm/Sub-type,Level,CTCI Num,URL,Date tested,Days Since Practiced,Times practiced,Time,Space,Notes ,See Problems,"
let array = input.split(",")
console.log(array)
