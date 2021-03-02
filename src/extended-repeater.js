const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let resultStr = '';
    if ("repeatTimes" in options){
        if (options.repeatTimes === undefined){
            options.repeatTimes = 1;
        }
        for (let i = 0; i < options.repeatTimes; i++) {
            resultStr += `${str}`;
            if ("additionRepeatTimes" in options) {
                if (options.additionRepeatTimes === undefined){
                    options.additionRepeatTimes = 1;
                }
                for (let j = 0; j < options.additionRepeatTimes; j++) {
                    resultStr += `${"addition" in options ? options.addition : ''}`;
                    if (j != options.additionRepeatTimes - 1) {
                        resultStr += `${("additionSeparator" in options) ? options.additionSeparator : '|'}`;
                    }
                }
            }
            if (i != options.repeatTimes - 1) {
                resultStr += `${"separator" in options ? options.separator : '+'}`;
            }
        }
    }
    return resultStr;
};
  
