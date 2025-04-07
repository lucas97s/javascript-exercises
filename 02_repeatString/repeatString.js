const repeatString = function(repeatedString, numberOfRepeates) {
    let concatedString = "";
    if (numberOfRepeates < 0 ){
        return "ERROR" ; 
    } 
    for (let i = 1 ; i<= numberOfRepeates ; i++){
        concatedString += repeatedString ; 
    }
    return concatedString
};



// Do not edit below this line
module.exports = repeatString;
