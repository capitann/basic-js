const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let resultStr = '';
    let repeatTimes = "repeatTimes" in options ? options.repeatTimes : 1;
        for (let i = 0; i < repeatTimes; i++) {
            resultStr += `${str}`;
            let additionRepeatTimes = "additionRepeatTimes" in options ? options.additionRepeatTimes : 1;
                for (let j = 0; j < additionRepeatTimes; j++) {
                    resultStr += `${"addition" in options ? options.addition : ''}`;
                    if (j != additionRepeatTimes - 1) {
                        resultStr += `${("additionSeparator" in options) ? options.additionSeparator : '|'}`;
                    }
                }
            if (i != repeatTimes - 1) {
                resultStr += `${"separator" in options ? options.separator : '+'}`;
            }
        }
    return resultStr;
};
  
