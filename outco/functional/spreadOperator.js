function myFunction (yl, y2, ...y3) { 
    const [y1, ... [result]] = y3
    console.log(result)
}

const myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']
console.log(myFunction(... myArray)) // ['rock', 'paper', 'scissors', 'lizard', 'spock']