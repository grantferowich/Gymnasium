const now = new Date()

console.log(now)
// console.log(now.getDate())
console.log(now.getDay())

const birthday = new Date('11-11-1992')
// const birthday = new Date('1992-11-11')
console.log(birthday)

console.log(birthday.getFullYear()) // 1992
console.log(birthday.getMonth()) // 10 [0-based index]
console.log(birthday.getDate()) // 10
console.log(birthday.toLocaleDateString())
console.log(now.toLocaleDateString())
// milliseconds -> seconds -> minutes
console.log((now-birthday)) // age in milliseconds

const millisecondsPerDay = 1000 * 60 * 60 * 24
const millisecondsPerYear = millisecondsPerDay * 365.25
console.log('millisecondsPerDay', millisecondsPerDay)
console.log('millisecondsPerYear', millisecondsPerYear)