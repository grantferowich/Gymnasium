var defangIPaddr = function(address) {
  let newAdd = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      newAdd += "[.]";
    } else {
      newAdd += address[i];
    }
  }
  return newAdd;
};

//Input: address = "255.100.50.0"
//Output: "255[.]100[.]50[.]0"
