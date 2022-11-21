// write a method to replace all spaces in a string with '%20'
// e.g. Mr. John Smith => Mr.%20John%20Smith

//solution 1: use JavaScript's native replaceAll method
const urlify = (s) => {

let withPercents = s.replaceAll(' ',"20%" )
console.log(withPercents)
}

// urlify("Mr John Smith")

