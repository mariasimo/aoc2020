const { readInputAsArray } = require("../utils")
const { findRow, findCol, findSeat } = require("./index")

const input = readInputAsArray("day05")
console.log(findSeat(input))
// console.log("# Day 05")

// const part1Solution = foo1(input)
// const part2Solution = foo2(input)

// console.log(`Part 1 -> ${part1Solution}`)
// console.log(`Part 2 -> ${part2Solution}`)
