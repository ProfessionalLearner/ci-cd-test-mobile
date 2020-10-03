const {sumFunc, multFunc} = require("../backend/mathFuncs")

describe("Sum function:", () => {
    test("should return sum of two values", () => {
        expect(sumFunc(1, 2)).toBe(3)
        expect(sumFunc(0, 3)).toBe(3)
    })

    test("should return value correctly comparing to other features", () => {
        expect(sumFunc(1, 2)).toBeGreaterThan(2)
    })
})

describe("Multiple function:", () => {
    test("should return product of both values", () => {
        expect(multFunc(1, 2)).toBe(2)
        expect(multFunc(0, 34)).toBe(0)
        expect(multFunc(5, 9)).toBe(45)
    })
})
