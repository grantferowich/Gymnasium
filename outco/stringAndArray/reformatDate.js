/* 

1507. Reformat Date
Easy

Successfully tested reformat date *locally* 2/23/23.


Given a date string in the form Day Month Year, where:

Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
Year is in the range [1900, 2100].

Convert the date string to the format YYYY-MM-DD, where:

YYYY denotes the 4 digit year.
MM denotes the 2 digit month.
DD denotes the 2 digit day.

Input: date = "20th Oct 2052"
Output: "2052-10-20"

Input: date = '11th Nov 1992'
Output: '1992-11-11'


Functional requirements 
X function should store the year as an integer 
function should store the month as an integer
X function should store the day as an integer
function should return 'yyyy-mm-dd'
*/




// const storeMonthsAsSet = (array) => {
//     let months = new Set();
//     for (let x = 0; x < array.length; x++){
//         months.add(array[x])
//     }
//     return months
// }

// const monthsSet = storeMonthsAsSet(monthsArr)
// const months = generateMonthsMap(monthsSet)

const reformatDate = (string = '') => {
    if (string.length === 0){ return ''}
    const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const year = string.slice(string.length-4);
    const monthString = string.split(' ')[1]
    let monthNum = monthsArr.indexOf(monthString)+1
    let day = parseInt(string.slice(0,2))
    if (day < 10){
        day = '0' + day.toString()
    }

    if (monthNum < 10){
        monthNum = '0' + monthNum.toString()
    } 
    return `${year}-${monthNum}-${day}`
}

const date1 = '11th Nov 1992'
const date2 = '9th Nov 1992'
const date3 = '31st Jun 1992'

const result1 = reformatDate(date1)
const result2 = reformatDate(date2)
const result3 = reformatDate(date3)
console.log('result1 ', result1)
console.log('result2 ', result2)
console.log('result3 ', result3)
const dateObj3 = new Date(result3)
console.log(dateObj3)
// date object: year-month-day
// console.log('get full year', result1.getFullYear())

