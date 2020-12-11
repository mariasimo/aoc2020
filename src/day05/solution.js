const { readInputAsArray } = require("../utils")
const { findHighestSeatID, findMySeat } = require("./index")

const input = readInputAsArray("day05")
console.log("# Day 05")

const part1Solution = findHighestSeatID(input)
const part2Solution = findMySeat(input)

console.log(`Part 1 -> ${part1Solution}`)
console.log(`Part 2 -> ${part2Solution}`)
