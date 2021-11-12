const cryptoHash = require("./crypto-hash")

describe("cryptoHash()", () => {
    it("generates a SHA-256 hash", () => {
        expect(cryptoHash("hello world")).toEqual("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9")
    })

    it("generates the same hash for the same inputs in any order", () => {
        expect(cryptoHash("a", "b", "c")).toEqual(cryptoHash("c", "a", "b"))
    })
})