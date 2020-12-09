const { readInputAsArray } = require("../utils")
const {
  formatEl,
  validatePasswords,
  passwordChecker,
  passwordChecker2,
} = require("./index")

// input processing
const input = readInputAsArray("day02", true)

describe("Day 02", () => {
  describe("General", () => {
    test("should return an object with the four elements", () => {
      expect(formatEl("1-3 a: abcde")).toStrictEqual({
        int1: "1",
        int2: "3",
        letter: "a",
        password: "abcde",
      })
    })
  })
  describe("Part 1", () => {
    test("should check the elements with rules", () => {
      expect(passwordChecker("1-3 a: abcde")).toBe(true)
    })
    test("should return the example solution", () => {
      expect(validatePasswords(input, passwordChecker)).toBe(2)
    })
  })
  describe("Part 2", () => {
    test("should check the elements with rules", () => {
      expect(passwordChecker2("1-3 a: abcde")).toBe(true)
    })
    test("should return the example solution", () => {
      expect(validatePasswords(input, passwordChecker2)).toBe(1)
    })
  })
})
