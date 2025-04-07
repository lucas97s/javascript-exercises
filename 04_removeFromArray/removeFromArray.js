const removeFromArray = function(array , ...theArg) {
    let initialArray = array ; 
    let index = 0 ; 

    for (const arg of theArg) {
        index = initialArray.indexOf(arg) ; 
        while ( index >= 0 ){
            initialArray.splice(index,1);
            index = initialArray.indexOf(arg) ;
        }

    }
    return initialArray; 
};

// Do not edit be low this line
module.exports = removeFromArray;
