const leapYears = function(aYear) {
    if(typeof aYear == "number") {
        if(aYear % 4 == 0) {
            if(aYear % 100 == 0) {
                return (aYear % 400 == 0);
            }
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = leapYears;
