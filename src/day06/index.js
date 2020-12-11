function parseInput(input) {
  return input.split("\n\n").map(el => el.split("").filter(el => el !== "\n"))
}

function filterDupl(arr) {
  const result = []

  arr.forEach(el => !result.includes(el) && result.push(el))
  return result
}

function sumAnswers(input) {
  const inputArr = parseInput(input)

  return inputArr.flatMap(el => filterDupl(el)).length
}

module.exports = { parseInput, filterDupl, sumAnswers }
