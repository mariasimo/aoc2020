const {
  parseInputAsObject,
  checkForMissingProps,
  checkPassportValid,
  countCompletePassports,
} = require("./index")
const { readInput } = require("../utils")

const input = readInput("day04", true)
const propertiesList = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"]
const passports = parseInputAsObject(input)

describe("Day 04: Passport validation", () => {
  describe("Part 1", () => {
    test("should received raw input and return and object", () => {
      expect(typeof parseInputAsObject(input)).toBe("object")
    })
    test("should find missing props in passport", () => {
      expect(checkForMissingProps(passports[1], propertiesList).length).toBe(1)
    })
    test("should find missing props in passport", () => {
      expect(
        checkForMissingProps(passports[0], propertiesList).length
      ).toBeFalsy()
    })
    test("should return true if passport is valid", () => {
      expect(checkPassportValid(passports[0], propertiesList)).toBe(true)
    })
    test("countCompletePassports should return a number", () => {
      expect(typeof countCompletePassports(passports, propertiesList)).toBe(
        "number"
      )
    })
    test("should count valid passports", () => {
      expect(countCompletePassports(passports, propertiesList)).toBe(2)
    })
  })
})
