const { readInputAsArray } = require("../utils")
const {
  findCombinationsOfTwo,
  findCombinationsOfThree,
  multiplyArr,
  sumArr,
  findAddends,
} = require("./index")

// input processing
const input = readInputAsArray("day01")

// test
describe("Day 1: Report Repair", () => {
  describe("Generic", () => {
    describe("findCombinationsOfTwo", () => {
      test("should return an array", () => {
        expect(findCombinationsOfTwo(input)).toBeInstanceOf(Array)
      })
    })
    describe("findCombinationsOfThree", () => {
      test("should return an array", () => {
        expect(findCombinationsOfThree(input)).toBeInstanceOf(Array)
      })
    })
    describe("Sum elements of an array", () => {
      test("should return valid number", () => {
        expect(sumArr([1, 2])).toBe(3)
        expect(sumArr([-1, "2"])).toBe(1)
      })
      test("should return NaN with a non number element", () => {
        expect(sumArr([-1, "foo"])).toBe(NaN)
      })
    })
    describe("Multiply elements of an array", () => {
      test("should return valid number", () => {
        expect(multiplyArr([1, 2])).toBe(2)
        expect(multiplyArr([-1, "2"])).toBe(-2)
      })
      test("should return NaN with a non number element", () => {
        expect(multiplyArr([-1, "foo"])).toBe(NaN)
      })
    })
  })

  describe("Part 1", () => {
    const arrOfTwo = findCombinationsOfTwo(input)

    test("should return an array of arrays of pairs", () => {
      expect(arrOfTwo[0].length).toBe(2)
    })
    test("should return an array", () => {
      expect(findAddends(arrOfTwo, 2020)).toBeInstanceOf(Array)
    })
    test("should return array with a length of two", () => {
      expect(findAddends(arrOfTwo, 2020).length).toBe(2)
    })
    test("should return expected solution", () => {
      expect(multiplyArr(findAddends(arrOfTwo, 2020))).toBe(197451)
    })
  })

  describe("Part 2", () => {
    const arrOfThree = findCombinationsOfThree(input)

    test("should return an array of arrays of three", () => {
      expect(arrOfThree[0].length).toBe(3)
    })
    test("should return an array", () => {
      expect(findAddends(arrOfThree, 2020)).toBeInstanceOf(Array)
    })
    test("should return array with a length of three", () => {
      expect(findAddends(arrOfThree, 2020).length).toBe(3)
    })
    test("should return expected solution", () => {
      expect(multiplyArr(findAddends(arrOfThree, 2020))).toBe(138233720)
    })
  })
})
