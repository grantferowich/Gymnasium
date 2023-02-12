// given an input return grades automated to a set schedule

 
/*


sample input: 
4 
73
67
38
33

sample output
75
67
40
33



*/




function gradingStudents(grades){
    let array = []
//    let remainder = (69 % 5)
//    console.log(remainder);

    // if remainder is 3, add 2 // 68 => 70
    // if remainder is 4, add 1 // 69 => 70
    // if remainder is < 3 do nothing 65,66,67 => 65,66,67

    for (let x = 1; x < grades.length; x++){
        let remainder = grades[x] % 5;
        if (remainder === 3 && grades[x] > 38){
            array.push(grades[x] +2); 
        } else if (remainder === 4 && grades[x] > 38){
            array.push(grades[x] + 1);
        } else {
                array.push(grades[x])
        }       
    }
   return array;
}
//inputs number of grades
// array of grades
// console.log(gradingStudents([4, 67, 73, 38, 33])) 
// 67. 75, 40, 33

// function gradingStudents(grades){
//     let array = [];
     
//      for (let x = 1; x < grades.length; x++){
//          let remainder = grades[x] % 5;
//          if (remainder === 3 && grades[x] > 38){
//              array.push(grades[x] + 2); 
//          } else if (remainder === 4 && grades[x] > 38){
//              array.push(grades[x] + 1);
//          } else {
//              array.push(grades[x])
//          }
//      }
 
//      return array
// }

console.log(gradingStudents([4, 67, 73, 38, 33])) 