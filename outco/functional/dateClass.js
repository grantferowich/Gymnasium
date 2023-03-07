const now = new Date()

console.log(now)
// console.log(now.getDate())
console.log(now.getDay())
console.log(now.getFullYear())
console.log('//debug month', now.getMonth())

const birthday = new Date('11-11-1992')
// const birthday = new Date('1992-11-11')
console.log(birthday)

console.log(birthday.getFullYear()) // 1992
console.log(birthday.getMonth()) // 10 [0-based index]
console.log(birthday.getDate()) // 10
console.log('toLocaleDateString--', birthday.toLocaleDateString())
console.log(now.toLocaleDateString())
// milliseconds -> seconds -> minutes
console.log((now-birthday)) // age in milliseconds
const ageInMilliseconds = now - birthday
console.log('ageInMilliseconds', ageInMilliseconds)
const millisecondsPerDay = 1000 * 60 * 60 * 24
const millisecondsPerYear = millisecondsPerDay * 365.25
console.log('millisecondsPerDay', millisecondsPerDay)
console.log('millisecondsPerYear', millisecondsPerYear)
const age = ageInMilliseconds / millisecondsPerYear
console.log('age', age)