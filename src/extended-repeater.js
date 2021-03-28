const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let Newstr = [];
  let STRadition = [];
  let n = Number(options.additionRepeatTimes);
  let k = Number(options.repeatTimes);
  
  if (options.additionRepeatTimes) {
    n = Number(options.additionRepeatTimes);
  } else {
    n = 1;
  }

  if (options.repeatTimes) {
    k = Number(options.repeatTimes);
  } else {
    k = 1;
  }


  for (let i = 0; i<n; i++) {
    if (options.addition != undefined || options.addition === null){
      STRadition[i] = String(options.addition); 
    }

  }
  if (options.additionSeparator) {
    STRadition = STRadition.join(options.additionSeparator);
  } else {
    STRadition = STRadition.join('|');
  }


  for (let i = 0; i<k; i++) {
    Newstr[i] = str + STRadition; 
  }

  if (options.separator) {
    Newstr = Newstr.join(options.separator);
  } else {
    Newstr = Newstr.join('+');
  }

  return Newstr;

};
  