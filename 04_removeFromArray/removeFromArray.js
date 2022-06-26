const removeFromArray = function(anArray) {
    let newArray = [...anArray];
    let args = [...arguments];
    args = args.slice(1);
    for(let i = 0; i < args.length; i++) {
        let elemIndex = anArray.indexOf(args[i]);
        if(elemIndex === -1){
            continue;
        }
        newArray = anArray.slice(0, elemIndex);
        newArray = newArray.concat(anArray.slice(elemIndex + 1));
        anArray = [...newArray];
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
