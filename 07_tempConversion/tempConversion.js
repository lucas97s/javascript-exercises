const convertToCelsius = function(tempInFahrenheit) {
  let roundedValue = (((tempInFahrenheit-32)*5)/9).toFixed(1) ;

  if (roundedValue.endsWith(0)) {
    return parseInt(parseFloat(roundedValue).toFixed(0)) ; 
  } else {
    return parseFloat(roundedValue) ; 
  }

  
}

const convertToFahrenheit = function(tempInCelsius) {
  let roundedValue = ((tempInCelsius*(9/5))+32).toFixed(1) ;

  if (roundedValue.endsWith(0)) {
    return parseInt(parseFloat(roundedValue).toFixed(0)) ; 
  } else {
    return parseFloat(roundedValue) ; 
  }
 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
