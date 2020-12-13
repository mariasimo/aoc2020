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

// si la bolsa exterior ya contiene una de la baglist, no volver a contar
function findBagsContaining(bagsObj, bagsToFind, alreadyCounted = []) {
  let bagList = [...bagsToFind]

  bagList = [...Object.keys(bagsObj)].flatMap((outerBag, i) => {
    let found = false
    return bagList.reduce((acc, innerBag) => {
      found = Object.values(bagsObj)[i].hasOwnProperty(innerBag)
      if (found && !acc.includes(outerBag)) acc.push(outerBag)
      return acc
    }, [])
  })

  alreadyCounted.push(...bagList)
  return bagList.length <= 0
    ? [...new Set(alreadyCounted)].length
    : findBagsContaining(bagsObj, bagList, alreadyCounted)
}

module.exports = { capitalize, findBagsContaining, parseListToObject }
