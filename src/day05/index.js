function findRow(str) {
  const commands = str.split("").splice(0, 7)
  const rows = new Array(128).fill(0).map((_, i) => i)
  return commands.reduce((acc, cmd) => {
    return cmd === "F"
      ? acc.splice(0, acc.length / 2)
      : acc.splice(acc.length / 2, acc.length)
  }, rows)[0]
}

function findCol(str) {
  const commands = str.split("").splice(7)
  const columns = new Array(8).fill(0).map((_, i) => i)
  return commands.reduce((acc, cmd) => {
    return cmd === "L"
      ? acc.splice(0, acc.length / 2)
      : acc.splice(acc.length / 2, acc.length)
  }, columns)[0]
}

function calcSeatId(row, col) {
  return row * 8 + col
}

function calcHighest(arr) {
  return arr.sort((a, b) => b - a)[0]
}

function findHighestSeatID(arr) {
  const seats = arr.map(el => calcSeatId(findRow(el), findCol(el)))
  return calcHighest(seats)
}

function findMySeat(arr) {
  const seats = arr.map(el => calcSeatId(findRow(el), findCol(el)))

  const seatsWidthEmptyAdjacent = seats
    .sort((a, b) => b - a)
    .filter((el, i, arr) => arr[i - 1] - el > 1 || el - arr[i + 1] > 1)

  return seatsWidthEmptyAdjacent[0] - 1
}

module.exports = {
  findRow,
  findCol,
  calcSeatId,
  calcHighest,
  findHighestSeatID,
  findMySeat,
}
