const Block = require("./Block.js")
const cryptoHash = require("./crypto-hash.js")

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

    static isChainValid(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false

        for (let i = 1; i < chain.length; i++) {
            const currentBlock = chain[i]
            const previousBlock = chain[i - 1]

            if (currentBlock.lastHash !== previousBlock.hash) return false

            const {timestamp, lastHash, data, hash} = currentBlock
            if (cryptoHash(timestamp, lastHash, data) !== hash) return false

        }

        return true
    }
}