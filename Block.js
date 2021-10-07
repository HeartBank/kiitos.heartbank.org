class Block {
    constructor(timestamp, lashHash, hash, data) {
        this.timestamp = timestamp
        this.lashHash = lashHash
        this.hash = hash
        this.data = data
    }
}

const block1 = new Block("01/07/1985", "01", "02", 555)
console.log("block1", block1)