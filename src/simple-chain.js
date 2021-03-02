const CustomError = require("../extensions/custom-error");
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || position - 1 < 0 || position - 1 >= this.getLength()) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let fullChain = '';
    for (let i = 0; i < this.getLength(); i++) {
      fullChain += `( ${this.chain[i]} )`;
      if (i < this.getLength() - 1) {
        fullChain += '~~';
      }
    }
    this.chain = [];
    return fullChain;
  }
};

module.exports = chainMaker;
