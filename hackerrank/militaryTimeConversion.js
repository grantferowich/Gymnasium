// Given a time such as 12:00:01PM return the military time, 12:00:01 
// Expect 1:00:00AM to return 13:00:00
// Expect 07:30:00AM to return 07:30:00
// Expect 7:30:00PM to return 19:30:00

//Solution 1: Ascertain the pm or am value. 
//Create two possible scenarios for returning based on whether period is am or pm
//For the am period return the hour value as is unless the hour value is 12, in which case 00 must be returned
//For the pm perioud add 12 to the hour value, leaving minutes and seconds as is 
 
const militaryTimeConversion = (s) => {
    let period = (s[s.length-2]+s[s.length-1]).toLowerCase();
    let hour = s.split(":")[0];
    // console.log('hour', hour)
    let minute = s.split(":")[1];
    // console.log('minute', minute);
    let second = s.split(":")[2].substring(0,2);
    // console.log('second', second);

    if (period === 'am'){
        if (hour === '12') {
            return "00:"+minute+":"+second;
        }  else {
            return hour+":"+minute+":"+second;
        }
    } else {
        if (hour == 12) {
            return hour+":"+minute+":"+second;
        } else {
            return (12+parseInt(hour))+":"+minute+":"+second;
        }
    };
}

// militaryTimeConversion('12:30:00AM')
module.exports = militaryTimeConversion