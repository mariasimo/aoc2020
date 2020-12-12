const { readInputAsArray } = require("../utils")
const input = readInputAsArray("day07")

const capitalize = s => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const parseListToObject = input => {
  const obj = {}
  input.forEach(el => {
    const arr = el.split(" ")
    const outerBg =
      arr[0] +
      arr[1]
        .split("")
        .map((el, i) => (i === 0 ? el.toLocaleUpperCase() : el))
        .join("")

    arr.splice(0, 4)
    const contents = arr.filter(el => !el.includes("bag"))

    const contentsObj = contents.reduce(function (acc, cu, i) {
      if (i % 3 == 1) {
        const camelCaseColor = cu + capitalize(contents[i + 1])
        acc[camelCaseColor] = contents[i - 1]
      }
      return acc
    }, {})

    obj[outerBg] = contentsObj
  })
  return obj
}

const dummyBags = {
  lightRed: {
    brightWhite: 1,
    mutedYellow: 2,
  },
  darkOrange: {
    brightWhite: 3,
    mutedYellow: 4,
  },
  brightWhite: {
    shinyGold: 1,
  },
  mutedYellow: {
    shinyGold: 2,
    fadedBlue: 9,
  },
  shinyGold: {
    darkOlive: 1,
    vibrantPlum: 2,
  },
  darkOlive: {
    fadedBlue: 3,
    dottedBlack: 4,
  },
  vibrantPlum: {
    fadedBlue: 5,
    dottedBlack: 6,
  },
  fadedBlue: {},
  dottedBlack: {},
}

const bags = parseListToObject(input)

function findBagsContaining(bags, bagList, cnt = 0) {
  let count = cnt
  let bgList = [...bagList]

  bgList = Object.keys(bags).filter((_, i) => {
    let filter = false
    bgList.forEach((innerBg, j) => {
      filter = !Object.values(bags)[i].hasOwnProperty(innerBg)
    })
    return !filter
  })

  count += bgList.length
  return bgList.length <= 0 ? count : findBagsContaining(bags, bgList, count)
}

console.log(bags, findBagsContaining(bags, ["shinyGold"]))
// console.log("# Day 07")

// const part1Solution = foo1(input)
// const part2Solution = foo2(input)

// console.log(`Part 1 -> ${part1Solution}`)
// console.log(`Part 2 -> ${part2Solution}`)
