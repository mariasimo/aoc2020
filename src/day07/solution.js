const { readInputAsArray } = require("../utils")
const { parseListToObject, findBagsContaining } = require("./index")

const input = readInputAsArray("day07")
const bags = parseListToObject(input)

console.log("# Day 07")

const part1Solution = findBagsContaining(bags, ["shinyGold"])
// const part2Solution = foo2(input)

console.log(`Part 1 -> ${part1Solution}`)
// console.log(`Part 2 -> ${part2Solution}`)
