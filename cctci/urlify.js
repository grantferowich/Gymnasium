// write a method to replace all spaces in a string with '%20'
// e.g. Mr. John Smith => Mr.%20John%20Smith

//solution 1: Use JavaScript's native replaceAll method.
const urlify = (s) => {

let withPercents = s.replaceAll(' ',"%20" )
console.log(withPercents)
}

// urlify("Mr John Smith")

// Solution 2: Use JavaScript's native .replace method. 
const urlify2 = (s) => {

    let withPercents = s.replace(/ /g,"%20" )
    console.log(withPercents)
}
// urlify2("Mr John Doe")


// Solution 3: Splice method. This method converts the string into an array
// Once the string is converted to an array, the splice method is called
// Splice takes in the index at which the space is found
// Splice also takes in how many characters to remove (1)
// Splice also takes in the characters to insert in place of the removed character
// (%, 2, 0)
// for the third argument, "%20" and "%", "2", "0" will both work 
const urlify3 = (s) => {
    let str  = s.split("")
    for (let i = 0; i < str.length; i++){
        if (str[i] == " "){
            str.splice(i, 1, "%20");
        }
    }
    console.log(str.join(""));
}
urlify3("Mr John Doe")
