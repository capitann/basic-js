const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date){
    return "Unable to determine the time of year!";
  }
  if (!date instanceof Date || isNaN(date)){
    throw new Error();
  }
  let month = date.getMonth() + 1;
  if ([12, 1, 2].includes(month)){
    return 'winter';
  }
  if ([3, 4, 5].includes(month)){
    return 'spring';
  }
  if ([6, 7, 8].includes(month)){
    return 'summer';
  }
  if ([9, 10, 11].includes(month)){
    return 'autumn';
  }
  return 'winter';
};
