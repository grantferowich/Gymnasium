/* 
929. Unique Email Addresses
Easy
Companies

Complexity analysis:
Time complexity: O(N^2)
Space complexity: O(N) 

Every valid email consists of a local name and a domain name, 
separated by the '@' sign. Besides lowercase letters, 
the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name,
and "leetcode.com" is the domain name. If you add periods '.' 
between some characters in the local name part of an email address, 
mail sent there will be forwarded to the same address without dots 
in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" 
forward to the same email address. If you add a plus '+' in 
the local name, everything after the first plus sign will 
be ignored. This allows certain emails to be filtered. Note 
that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each emails[i],
return the number of different addresses that actually receive mails.

Function requirements
 - store local name
 - store domain name
 - Local name formatting points: 
    -> local names must have all periods removed / g.fero and gfero are treated as the same local name
    -> local names containing the "+" sign have all contents to the right of the plus sign deleted
    -> 'gfero+wake' will be treated as 'gfero'

- The basic idea here is to format incoming email addresses.
- Return the number of unique email addresses.
- Use a set. Return the set's size. 


*/

const numberOfUniqueEmails = (emailList = []) =>{
    let emails = new Set()
    let x = 0;
    while (x < emailList.length){
        let email = emailList[x];
        let atIndex = email.indexOf("@")
        let localName = email.slice(0, atIndex+1)
        let domainName = email.slice(atIndex)
        localName = localName.replaceAll('.','')
        let plusIndex = localName.indexOf('+')
        localName = localName.slice(0, plusIndex)
        email = localName + domainName
        emails.add(email)
        x++
    }
    return emails.size
}



/* TESTS */

const input = ['gfero@gmail.com', 'kayfero@gmail.com', 'kay.fero@gmail.com', 'gfero+23@gmail.com'] // 2
const result = numberOfUniqueEmails(input) // 2
console.log('result',result)

const input2 = [] 
const result2 = numberOfUniqueEmails(input2) // 0
console.log('result2:', result2)

const input3 = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
const result3 = numberOfUniqueEmails(input3)
console.log('result3:',result3) // 2

const input4 = ['a@gmail.com', 'g@wfu.edu', 'f@wfu.edu'] 
const result4 = numberOfUniqueEmails(input4)
console.log('result4:',result4) // 3