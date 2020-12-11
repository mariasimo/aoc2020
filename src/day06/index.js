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

function parseInput2(input) {
  return input.split("\n\n").map(el => el.split("\n").map(el => el.split("")))
}

function filterPresence(group) {
  const mapPresence = group.reduce((acc, person) => {
    person.forEach((el, i) => {
      const isLetterIncludedForAll = group.every(p => p.includes(el))
      if (isLetterIncludedForAll && !acc.includes(el)) acc.push(el)
      person.splice(i, 0)
    })
    return acc
  }, [])

  return mapPresence
}

function sumAnswers2(input) {
  const inputArr = parseInput2(input)

  return inputArr
    .map(group => filterPresence(group).length)
    .reduce((acc, cu) => acc + cu)
}

module.exports = {
  parseInput,
  filterDupl,
  sumAnswers,
  parseInput2,
  filterPresence,
  sumAnswers2,
}
