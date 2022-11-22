// write a method to replace all spaces in a string with '%20'
// e.g. Mr. John Smith => Mr.%20John%20Smith

// Solution 2: Use JavaScript's native .replace method. 
const urlify2 = (s) => {

    return s.replace(/ /g,"%20" )
}

module.exports = urlify2