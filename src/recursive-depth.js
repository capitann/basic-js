const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let maxDepth = 0;
        if (Array.isArray(arr)) {
            for (let element of arr)
                if (Array.isArray(element)){
                    maxDepth = Math.max(maxDepth, this.calculateDepth(element));
                }
            return ++maxDepth;
        }
        return maxDepth;
    }
};
