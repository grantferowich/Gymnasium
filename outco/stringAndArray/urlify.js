// write a method to replace all spaces in a string with '%20'
// e.g. Mr. John Smith => Mr.%20John%20Smith

//solution 1: Use JavaScript's native replaceAll method.
const urlify = (s) => {
    return s.replaceAll(' ',"%20" )
}

module.exports = urlify


