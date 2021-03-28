const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


  constructor(Machine = true) {
    this.Machine = Machine;
  }

  encrypt(str, key) {
    if (typeof(str) !== "string" || typeof(key) !== "string"  ) {
      throw new Error('Error');
    }

    str = str.toUpperCase();
    key = key.toUpperCase();
    let alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let Newstr = [];
    let k = 0;
    for (let i = 0; i<str.length; i++){
      if (/[a-z]/i.test(str[i])) {
          Newstr.push(alf[(alf.indexOf(str[i]) + alf.indexOf(key[k % key.length])) % 26]);
          k ++; 
      } else {
        Newstr.push(str[i]);
      }
    }
    return this.Machine ? Newstr.join('') : Newstr.reverse().join('');
  }    



  decrypt(str, key) {
    if (typeof(str) !== "string" || typeof(key) !== "string"  ) {
      throw new Error('Error');
    }

    str = str.toUpperCase();
    key = key.toUpperCase();
    let alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let Newstr = [];
    let k = 0;
    for (let i = 0; i<str.length; i++){
      if (/[a-z]/i.test(str[i])) {
        Newstr.push(alf[(alf.indexOf(str[i]) - alf.indexOf(key[k % key.length]) + 26) % 26]);
        k ++; 
      } else {
        Newstr.push(str[i]);
      }
    }

    return this.Machine ? Newstr.join('') : Newstr.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
