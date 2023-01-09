// write a method to replace all spaces in a string with '%20'
// e.g. Mr. John Smith => Mr.%20John%20Smith


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
    return (str.join(""));
}

module.exports = urlify3