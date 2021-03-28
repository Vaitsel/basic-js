const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (isNaN(date) == true) {
    return 'Unable to determine the time of year!';
  }

  if (date === null) {
    return 'Unable to determine the time of year!';
  }

  let month = date.getMonth() + 1;
  let year = date.getFullYear()
  let den = date.getDate();


  if (month == 1 || month ==2 || month == 12){
    return 'winter';
  }
  if (month >= 3 && month <=5){
    return 'spring';
  }
  if (month >= 6 && month <=8){
    return 'summer';
  }
  if (month >= 9 && month <=11){
    return 'autumn';
  }
};
