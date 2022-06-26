const reverseString = function(string) {
    let strArray = string.split("");
    let newStr = "";
    let numChars = strArray.length;
    for( let i = 0; i < numChars; i++) {
        newStr += strArray.pop();
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
