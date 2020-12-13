const { parseListToObject, capitalize, findBagsContaining } = require("./index")
const { readInputAsArray } = require("../utils")

const input = readInputAsArray("day07", true)
const bags = parseListToObject(input)

const testInput = [
  "light red bags contain 1 bright white bag, 2 muted yellow bags.",
  "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
]

const expectedObj = {
  lightRed: {
    brightWhite: "1",
    mutedYellow: "2",
  },
  darkOrange: {
    brightWhite: "3",
    mutedYellow: "4",
  },
}

describe("Day 07", () => {
  describe("Part 1", () => {
    test("capitalize should return string with first letter uppercased", () => {
      expect(capitalize("test")[0]).toBe("T")
    })
    test("parseListToObject should return input parse correcty as object", () => {
      expect(parseListToObject(testInput)).toMatchObject(expectedObj)
    })
    test("findBagsContaining should return a number", () => {
      expect(typeof findBagsContaining(bags, ["shinyGold"])).toBe("number")
    })
    test("findBagsContaining should return expected result", () => {
      expect(findBagsContaining(bags, ["shinyGold"])).toBe(4)
    })
  })
})
