const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr, k=0, Newarr=[] ) {
    k++;
    Newarr.push(k);
    for (let i = 0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], k ,Newarr)
      }
    }
    return Math.max(...Newarr)
  }
};