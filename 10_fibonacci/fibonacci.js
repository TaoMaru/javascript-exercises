const fibonacci = function(fibPlace) {
    let sum = 1;
    let prevSum = 0;
    let newSum;
    if(typeof fibPlace == "string") {
        fibPlace = parseInt(fibPlace);
    }
    if(fibPlace < 0) {
        return "OOPS";
    }
    else if(fibPlace === 0) {
        return 0;
    }
    else if(fibPlace === 1) {
        return 1;
    }
    else {
        for(let i = 1; i < fibPlace; i++) {
            newSum = prevSum + sum; // 1 = 0 + 1 --- 2 = 1 + 1 --- 3 = 1 + 2 --- 5 = 2 + 3 --- 8 = 3 + 5 --- 13 = 5 + 8
            prevSum = sum; //            pS = 1 ----- pS = 1 ------ pS = 2 ------ pS = 3 ------ pS = 5 ------ pS = 8
            sum = newSum; //             s = 1 ----- s = 2 ----- s = 3 ------- s = 5 ------- s = 8 ------- s = 13
        }
    }
    return newSum;
    // 0 : 1 1 2 3 5 8 13 21 34
};

// Do not edit below this line
module.exports = fibonacci;
