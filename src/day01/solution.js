const { readInputAsArray } = require("../utils")
const {
  findCombinationsOfTwo,
  findCombinationsOfThree,
  multiplyArr,
  findAddends,
} = require("./index")

const input = readInputAsArray("day01")

console.log("# Day 01\n")

const arrOfTwo = findCombinationsOfTwo(input)
const arrOfThree = findCombinationsOfThree(input)

const part1Solution = multiplyArr(findAddends(arrOfTwo, 2020))
const part2Solution = multiplyArr(findAddends(arrOfThree, 2020))

console.log(`Part 1 -> ${part1Solution}`)
console.log(`Part 2 -> ${part2Solution}`)
