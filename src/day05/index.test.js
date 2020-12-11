const { readInputAsArray } = require("../utils")
const {
  findRow,
  findCol,
  calcSeatId,
  calcHighest,
  findHighestSeatID,
  findMySeat,
} = require("./index")

const input = readInputAsArray("day05", true)
const numArr = []

describe("Day 05", () => {
  describe("Part 1", () => {
    test("findRow should return expected result", () => {
      expect(findRow("FBFBBFFRLR")).toBe(44)
    })
    test("findCol should return expected result", () => {
      expect(findCol("FBFBBFFRLR")).toBe(5)
    })
    test("calcSeatId should return expected result", () => {
      expect(calcSeatId(44, 5)).toBe(357)
    })
    test("calcHighest should return highest num", () => {
      expect(calcHighest([1, 2, 3, 4, 5])).toBe(5)
    })
    test("findHighestSeatID should return highest seatId of given input", () => {
      expect(findHighestSeatID(input)).toBe(820)
    })
  })
  describe("Part 2", () => {
    test("findMySeat should return a number", () => {
      expect(typeof findMySeat(numArr)).toBe("number")
    })
  })
})
