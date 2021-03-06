const { readInputAsArray } = require("../utils")
const {
  validatePasswords,
  passwordChecker,
  passwordChecker2,
} = require("./index")

const input = readInputAsArray("day02")
console.log("# Day 02\n")

const part1Solution = validatePasswords(input, passwordChecker)
const part2Solution = validatePasswords(input, passwordChecker2)

console.log(`Part 1 -> ${part1Solution}`)
console.log(`Part 2 -> ${part2Solution}`)
