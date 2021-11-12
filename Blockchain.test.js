const Blockchain = require("./Blockchain.js")
const Block = require("./Block.js")
const { genesis } = require("./Block.js")

describe("Blockchain", () => {
    const blockchain = new Blockchain()

    it("has an Array as a chain", () => {
        expect(blockchain.chain instanceof Array).toBe(true)
    })

    it("starts with the genesis block", () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis())
    })

    it("adds a new block to the chain", () => {
        const data = "some data"
        blockchain.addBlock({data})

        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data)
    })
})