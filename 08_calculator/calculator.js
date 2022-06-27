const add = function(num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	let difference = num1 - num2;
  return difference;
};

const sum = function(anArray) {
	let newSum = 0;
  if(anArray.length != 0) {
    for(let nextNum of anArray) {
      newSum += nextNum;
    }
  }
  return newSum;
};

const multiply = function(anArray) {
  let product = 0;
  if(anArray.length != 0) {
    product = 1;
    for(let nextNum of anArray) {
      product *= nextNum;
    }
  }
  return product;
};

const power = function(baseNum, power) {
	let raisedToPower = baseNum;
  for(let i = 0; i < power - 1; i++) {
    raisedToPower *= baseNum;
  }
  return raisedToPower;
};

const factorial = function(aNum) {
  let total = 1;
	if(aNum != 0 && aNum != 1) {
    let i = aNum;
    while(i > 0) {
      total *= i;
      i--;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
