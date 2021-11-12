const Block = require("./Block.js")

module.exports = class Blockchain {
    constructor() {
        this.chain = [Block.genesis()]
    }

    addBlock({data}) {
        this.chain.push(Block.mineBlock({
            lastBlock: this.chain[this.chain.length - 1],
            data
        }))
    }
}