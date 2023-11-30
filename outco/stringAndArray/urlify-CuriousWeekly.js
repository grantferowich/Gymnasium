/* Urlify Curious Weekly
Developed November 24, 2023
by Grant Ferowich

the function takes in the title of the writing
the function outputs a command to build a hugo command
*/

const urlifyCuriousWeekly = (string) => {
    return  "hugo new posts/"+string.replaceAll(' ',"-" ).toLowerCase()+".md"
}

const outputStr1 = urlifyCuriousWeekly("grant ferowich")
console.log(outputStr1)