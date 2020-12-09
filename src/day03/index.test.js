const {
  checkDistanceToEnd,
  checkPosition,
  updatePosition,
  extendMap,
  countTrees,
  travelThroughForest,
  multiplyValues,
} = require("./index")
const { readInputAsArray } = require("../utils")

const input = readInputAsArray("day03", true)

describe("Day 03", () => {
  describe("Part 1", () => {
    test("should calculate remaining distance", () => {
      expect(checkDistanceToEnd({ top: 0, left: 0 }, 10)).toBe(10)
    })
    test("should match one of two values in input array", () => {
      expect(checkPosition({ top: 0, left: 0 }, input)).toMatch(/^.|#$/)
    })
    test("should return new coords object", () => {
      expect(
        updatePosition({ top: 0, left: 0 }, { right: 3, bottom: 1 })
      ).toEqual({ top: 1, left: 3 })
    })
    test("should return an  array", () => {
      expect(extendMap(input, { right: 3, bottom: 1 })).toBeInstanceOf(Array)
    })
    test("should return an equal or larger array", () => {
      expect(
        extendMap(input, { right: 3, bottom: 1 })[0].length
      ).toBeGreaterThanOrEqual(input.length)
    })
    test("should return length of filtered array", () => {
      expect(countTrees([".", ".", "#"])).toBe(1)
    })
    test("should return expected result from example", () => {
      expect(
        travelThroughForest({ top: 0, left: 0 }, { right: 3, bottom: 1 }, input)
      ).toBe(7)
    })
  })
  describe("Part 2", () => {
    test("should return multiplication of values", () => {
      expect(multiplyValues([1, 2, 3])).toBe(6)
    })
    test("should return expected result from example", () => {
      expect(
        travelThroughForest({ top: 0, left: 0 }, { right: 1, bottom: 1 }, input)
      ).toBe(2)
    })
    test("should return expected result from example", () => {
      expect(
        travelThroughForest({ top: 0, left: 0 }, { right: 5, bottom: 1 }, input)
      ).toBe(3)
    })
    test("should return expected result from example", () => {
      expect(
        travelThroughForest({ top: 0, left: 0 }, { right: 7, bottom: 1 }, input)
      ).toBe(4)
    })
    test("should return expected result from example", () => {
      expect(
        travelThroughForest({ top: 0, left: 0 }, { right: 1, bottom: 2 }, input)
      ).toBe(2)
    })
  })
})
