/* 

Given a string of angle brackets, angles, such as "<<><>><<<>", 
write a function that adds angle brackets to the begginning and end 
to make all the angle brackets match and return it. 

The angle brackets "match" if for every < there is a corresponding >
appearing after it in the string, and for ever > there is a 
corresponding < appearing before it in the string.

angles: "><<><"
output: "<><<><>>"


stack = [>]
<>, two of these: < , one >, one <: three <, one >, so add two of these: >

*/
// input: string containing <<>>
// output: string containing <<>>
// loop over the string
// push < and > to stack
// if top of stack is < and next is >, then pop the stack 
// and continue iteration if the top fo the stack is < 
// and next is <, then push a > to the string
//
// input: "<<"
// output: "<><>"

// input: "<"
// output: "<>"

// input: ">"
// output: "<>"


const matchAngles = (str) => {

    // stack 
    // list of things with push and pop
    let s = []
    let x = 0 

}
















// const solution = (angles) => {
//     stack = ""

//     for (let x = 0; x < angles.length; x++){
//         let symbol = angles[x]
// //         let stackTop = stack[stack.length -1]

// //         if (stack[stack.length - 2] === "<" && stackTop === ">"){
// //             console.log('hi 1')
// //             continue
// //         }
// //         if (symbol === "<" && stackTop === ">"){
// //             console.log('hi')
// //             stack += symbol
// //             stack += ">"
// //         }
        
//         if (symbol === "<" && stack[stack.length-1] === "<"){
//             console.log('hi2')
//             stack += symbol
//             stack += ">"
            
//         }

    

//     }
//     return stack;
// };

