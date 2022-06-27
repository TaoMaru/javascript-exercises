const findTheOldest = function(people) {
    let max = 1;
    let oldest;
    let age;
    for(const person of people) {
        if( person.hasOwnProperty("yearOfDeath") ) {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            age = 2022 - person.yearOfBirth;
        }
        if( age > max) {
            max = age;
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
