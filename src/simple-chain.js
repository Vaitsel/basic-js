const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > this.arr.length-1 || position < 1){
      this.arr = [];
      throw new Error('Error');
    } else {
      this.arr.splice(position-1,1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join('~~');
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;
