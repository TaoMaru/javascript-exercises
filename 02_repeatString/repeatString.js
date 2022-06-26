const repeatString = function(string, numTimes) {
    let newString = "";
    if(numTimes < 0) {
        newString = "ERROR";
    }
    for(let i = 0; i < numTimes; i++) {
        newString += string;
    }
    return newString;

};

// Do not edit below this line
module.exports = repeatString;
