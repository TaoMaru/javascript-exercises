const caesar = function(aString, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const capitalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newStr = "";
    let oldIndex;
    let newIndex;
    for(let i = 0; i < aString.length; i++) {
        if(alphabet.includes(aString[i])) {
            oldIndex = alphabet.indexOf(aString[i]);
            newIndex = oldIndex + shift;
            if( newIndex >= 26 ) {
                newIndex = newIndex % 26;
            }
            else if( newIndex < 0 ) {
                newIndex = 26 + newIndex;
            }
        newStr += alphabet[newIndex];
        }
        else if(capitalAlpha.includes(aString[i])) {
            oldIndex = capitalAlpha.indexOf(aString[i]);
            newIndex = oldIndex + shift;
            if( newIndex >= 26 ) {
                newIndex = newIndex % 26;
            }
            else if (newIndex < 0) {
                newIndex = 26 + newIndex;
            }
        newStr += capitalAlpha[newIndex];
        }
        else {
            newStr += aString[i];
        }
    }
    return newStr;
};

// Do not edit below this line
module.exports = caesar;
