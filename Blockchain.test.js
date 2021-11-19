const Blockchain = require("./Blockchain.js")
const Block = require("./Block.js")
const { genesis } = require("./Block.js")

describe("Blockchain", () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain()
    })

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

    describe("isChainValid()", () => {

        describe("chain does not starts with genesis block", () => {
            it("returns false", () => {
                blockchain.chain[0] = {data: "fake genesis"}

                expect(Blockchain.isChainValid(blockchain.chain)).toBe(false)
            })
        })

        describe("does start with genesis block", () => {

            beforeEach(() => {
                blockchain.addBlock({data: "block 1"})
                blockchain.addBlock({data: "block 2"})
                blockchain.addBlock({data: "block 3"})
            })

            describe("lastHash was changed", () => {
                it("returns false", () => {
                    blockchain.chain[2].lastHash = "broken"
                    expect(Blockchain.isChainValid(blockchain.chain)).toBe(false)
                })
            })

            describe("data was changed", () => {
                it("returns false", () => {
                    blockchain.chain[2].data = "tampered"
                    expect(Blockchain.isChainValid(blockchain.chain)).toBe(false)
                })
            })

            describe("no blocks are changed", () => {
                it("returns true", () => {
                    expect(Blockchain.isChainValid(blockchain.chain)).toBe(true)
                })
            })

        })

    })

})

