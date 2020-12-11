const { sumAnswers, parseInput } = require("./index")
const { readInput } = require("../utils")

const input = readInput("day06", true)

console.log("# Day 05")
console.log(parseInput(input))
const part1Solution = sumAnswers(input)
// const part2Solution = foo2(input)

console.log(`Part 1 -> ${part1Solution}`)
// console.log(`Part 2 -> ${part2Solution}`)
