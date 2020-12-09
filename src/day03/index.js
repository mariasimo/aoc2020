const travelThroughForest = (coords, slope, input) => {
  const path = []
  const distanceToEnd = input.length - 1
  const extendedMap = extendMap(input, slope)

  do {
    coords = updatePosition(coords, slope)
    path.push(checkPosition(coords, extendedMap))
  } while (checkDistanceToEnd(coords, distanceToEnd))
  return countTrees(path)
}

const countTrees = path => path.filter(el => el === "#").length

const extendMap = (input, slope) => {
  const rows = input.length
  const columns = input[0].length
  const timesToRepeatRows = Math.ceil((rows * slope.right) / columns)
  return input.map(i => i.repeat(timesToRepeatRows))
}

const updatePosition = (coords, slope) => {
  return { top: coords.top + slope.bottom, left: coords.left + slope.right }
}
const checkPosition = (coords, input) => {
  return input[coords.top][coords.left]
}
const checkDistanceToEnd = (coords, distanceToEnd) => {
  return distanceToEnd - coords.top
}

const multiplyValues = arr => arr.reduce((ac, cu) => ac * cu)

module.exports = {
  travelThroughForest,
  checkDistanceToEnd,
  checkPosition,
  extendMap,
  updatePosition,
  countTrees,
  multiplyValues,
}
