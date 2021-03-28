const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k;
  if (typeof(sampleActivity) !== "string") {
    return false;
  }
  
  if (isNaN(Number(sampleActivity)) || Number(sampleActivity) == 0) {
    return false;
  }


  if (t > 0) {
    return Math.ceil(t);
  } else {
    return false;
  }
};
