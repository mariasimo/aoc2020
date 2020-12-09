const { travelThroughForest, multiplyValues } = require("./index")
const { readInputAsArray } = require("../utils")

const input = readInputAsArray("day03")
const coords = { top: 0, left: 0 }
const slope = { right: 3, bottom: 1 }

console.log("# Day 03")

const part1Solution = travelThroughForest(coords, slope, input)
const arr = [
  travelThroughForest(coords, { right: 1, bottom: 1 }, input),
  travelThroughForest(coords, { right: 3, bottom: 1 }, input),
  travelThroughForest(coords, { right: 5, bottom: 1 }, input),
  travelThroughForest(coords, { right: 7, bottom: 1 }, input),
  travelThroughForest(coords, { right: 1, bottom: 2 }, input),
]
const part2Solution = multiplyValues(arr)
console.log(arr)

console.log(`Part 1 -> ${part1Solution}`)
console.log(`Part 2 -> ${part2Solution}`)
