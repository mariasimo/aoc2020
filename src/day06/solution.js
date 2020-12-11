const { sumAnswers, sumAnswers2 } = require("./index")
const { readInput } = require("../utils")

const input = readInput("day06")

console.log("# Day 05")
const part1Solution = sumAnswers(input)
const part2Solution = sumAnswers2(input)

console.log(`Part 1 -> ${part1Solution}`)
console.log(`Part 2 -> ${part2Solution}`)
