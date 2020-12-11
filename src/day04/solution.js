const {
  parseInputAsObject,
  countValidPassports,
  countCompletePassports,
} = require(".")
const { readInput } = require("../utils")

const input = readInput("day04")
const passports = parseInputAsObject(input)
const propertiesList = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"]

console.log("# Day 04")
const part1Solution = countCompletePassports(passports, propertiesList)
const part2Solution = countValidPassports(passports, propertiesList)

console.log(`Part 1 -> ${part1Solution}`)
console.log(`Part 2 -> ${part2Solution}`)
