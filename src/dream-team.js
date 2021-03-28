const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let validator = /[A-Za-z]/;
  let str = '';
  if (Array.isArray(members) !== true) {
    return false;
  }
  for (let i = 0; i<members.length; i++) {
    if (typeof(members[i]) == 'string') {
      if (typeof(members[i].match(validator))[0] == 'string') {
        str += members[i].match(validator)[0];
      }
    }
  }
  str = str.toUpperCase();
  str = str.split('').sort().join('');
  return str;
};
