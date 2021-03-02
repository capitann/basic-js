const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  let arr = [].concat(...matrix);
  let countOfCats = 0;
  for (let value of arr){
      if (value === "^^"){
        countOfCats++;
      }
  }
  return countOfCats;
};
