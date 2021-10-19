const Block = require("./Block.js")
const { GENESIS_DATA } = require("./config.js")
//import Block from "./Block.js"

describe("Block", () => {
    const timestamp = "01/07/1985"
    const lastHash = "01"
    const hash = "02"
    const data = 555

    const block = new Block({timestamp, lastHash, hash, data})

    it("has all properties", () => {
        expect(block.timestamp).toEqual(timestamp)
        expect(block.lastHash).toEqual(lastHash)
        expect(block.hash).toEqual(hash)
        expect(block.data).toEqual(data)
    })
})

//const block1 = new Block("01/07/1985", "01", "02", 555)
//console.log("block1", block1)
//const block1 = new Block("01/07/1985", "01", null, 555)

// const block1 = new Block({timestamp: "01/07/1985", lashHash: "01", hash: "02", data: 555})
// console.log("block1", block1)
//const block1 = new Block({lashHash: "01", timestamp: "01/07/1985", data: 555})

describe("genesis()", () => {
    const genesisBlock = Block.genesis()
    //console.log(genesisBlock)

    it("returns a Block instance", () => {
        expect(genesisBlock instanceof Block).toBe(true) // .toEqual
    })

    it("returns the genesis data", () => {
        expect(genesisBlock).toEqual(GENESIS_DATA)
    })
})

describe("mineBlock()", () => {
    const lastBlock = Block.genesis()
    const data = "some data"
    const minedBlock = Block.mineBlock({lastBlock, data})

    it("returns a Block instance", () => {
        expect(minedBlock instanceof Block).toBe(true)
    })

    it("sets the lastHash of minedBlock to the hash of the lastBlock", () => {
        expect(minedBlock.lastHash).toEqual(lastBlock.hash)
    })

    it("sets the data of the minedBlock", () => {
        expect(minedBlock.data).toEqual(data)
    })

    it("sets the timestamp of the minedBlock", () => {
        expect(minedBlock.timestamp).not.toEqual(undefined)
    })
})