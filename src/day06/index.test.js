const { parseInput, filterDupl, sumAnswers, sumAnswers2 } = require("./index")
const { readInput } = require("../utils")

const input = readInput("day06", true)

describe("Day 06", () => {
  describe("Part 1", () => {
    test("parseInput should return array", () => {
      expect(parseInput(input)).toBeInstanceOf(Array)
    })
    test("parseInput should return array of arrays", () => {
      expect(parseInput(input)[0]).toBeInstanceOf(Array)
    })
    test("filterDupl should return array", () => {
      expect(filterDupl(["a", "a", "b"])).toBeInstanceOf(Array)
    })
    test("filterDupl should filter array from duplicates", () => {
      expect(filterDupl(["a", "a", "b"])).toEqual(["a", "b"])
    })
    test("sumAnswer should return expected result", () => {
      expect(sumAnswers(input)).toBe(11)
    })
  })

  describe("Part 2", () => {
    test("sumAnswer2 should return expected result", () => {
      expect(sumAnswers2(input)).toBe(6)
    })
  })
})
