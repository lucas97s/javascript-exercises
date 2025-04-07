const reverseString = function(string) {
    let lengthOfString = string.length ; 
    let reversedString = "" ;
    let stringToReverse = string ;  
    for (let i = lengthOfString - 1 ; i >= 0 ; i--){
        reversedString = reversedString.concat(stringToReverse[i])
    }
    return reversedString ; 
};

// Do not edit below this line
module.exports = reverseString;
