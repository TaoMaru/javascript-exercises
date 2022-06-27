const palindromes = function (aString) {
  let inputStr = aString.toLowerCase().split("");
  
  let newStr = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 0; i < inputStr.length; i++) {
    if( alphabet.includes(inputStr[i] ) ) {
        newStr.push(inputStr[i]);
    }
  }
  
  let comparisonStr = [...newStr];
  comparisonStr.reverse();
  
  let joinedNewStr = newStr.join("");
  let joinedCompStr = comparisonStr.join("");
  
  return joinedNewStr === joinedCompStr;
};

// Do not edit below this line
module.exports = palindromes;
