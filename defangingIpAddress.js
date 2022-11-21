// var defangIPaddr = function(address) {
//   let newAdd = "";
//   for (let i = 0; i < address.length; i++) {
//     if (address[i] === ".") {
//       newAdd += "[.]";
//     } else {
//       newAdd += address[i];
//     }
//   }
//   return newAdd;
// };


//Input: address = "255.100.50.0"
//Output: "255[.]100[.]50[.]0"

const defangIPaddress = (string) => {
  let defangedAddress = ""
  for (let i = 0; i < string.length; i++ ){

    if (string[i] == "." || string[i] == ":") {
      defangedAddress += "[.]";
    }    else {
      defangedAddress += string[i];
    }
  }
    
    return defangedAddress    
}

let result = defangIPaddress("2600.1008:b114:333c:3cfe:94d7:9b52:64ad")
console.log(result)