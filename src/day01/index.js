const parseListItemsToNum = arr => arr.map(el => +el)

const findCombinationsOfTwo = array =>
  array.flatMap((x, _, arr) =>
    arr.map(y => [x, y]).filter(el => new Set(el).size === el.length)
  )

const findCombinationsOfThree = array =>
  array.flatMap((x, _, arr) =>
    arr
      .flatMap(y => arr.map(z => [x, y, z]))
      .filter(el => new Set(el).size === el.length)
  )

const multiplyArr = arr => parseListItemsToNum(arr).reduce((ac, cu) => ac * cu)
const sumArr = arr => parseListItemsToNum(arr).reduce((ac, cu) => ac + cu)
const findAddends = (arr, total) => arr.find(el => sumArr(el) === total)

module.exports = {
  findCombinationsOfTwo,
  findCombinationsOfThree,
  multiplyArr,
  sumArr,
  findAddends,
}
