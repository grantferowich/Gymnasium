// successfully tested the function 1/21/23
// input: "wake forest university"
// output: "wake%20forest%20%university"

const urlifyX1 = (string) =>{

    return string.replace(/ /g,"%20")
}

console.log(urlifyX1('wake forest university'))