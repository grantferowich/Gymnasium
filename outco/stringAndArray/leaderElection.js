/* LEADER ELECTION


Describe a technique to identify a "leader" among a group of 10 identical servers
 that are all connected to every other server. There are no prior distinguishing 
characteristics of any of them and the same program to identify the leader starts 
running on all of them at the same time. After ananswer is given, ask how much 
network traffic it requires and, if "ties" are possible, ask how you can break ties.


Generate a random number for each server.
Select the highest number to be elected as the leader.
If there are multiple servers which have the same value, 
then generate random numbers again for each server, 
and elect the server outputting the highest value.

*/


const leaderElection = (serverList) => {
    let randomScores = new Map()
    const random = () => { 
        return Math.floor(Math.random() * 10000000) 
    } 
    let highest = -Infinity
    let leader = -1 

    for (let s = 0; s < serverList.length; s++){
        let r = random()
        // console.log(r)
        randomScores.set(serverList[s], r)
    }

    for (let [key, value] of randomScores){        
        if (value >= highest){
            highest = value
            leader = key
        }
    }
    
    return leader
}

const serverList1 = [1,2,3,4,5,6,7,8,9,10]
// const result1 = leaderElection(serverList1)
// console.log('result1', result1)

const testRandomness = (serverList) =>{
    let occurrences = {};
    for (x = 0; x < 2000; x++){   
        let randomValue = leaderElection(serverList)
        occurrences[randomValue] = occurrences[randomValue] + 1 || 1;
    }
    return occurrences
}

let result = testRandomness(serverList1)
console.log(result)