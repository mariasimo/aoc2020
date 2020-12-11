function parseInputAsObject(input) {
  const items = input.split("\n\n")
  const subarrs = items.map(el =>
    el
      .split(/\s+/g)
      .filter(el => el)
      .map(el => el.split(":"))
  )

  return subarrs.map(el => Object.fromEntries(el))
}

const checkForMissingProps = (passport, list) => {
  const filteredPassport = list.filter(
    el => !Object.keys(passport).includes(el)
  )

  return filteredPassport
}

const checkPassportComplete = (passport, list) => {
  const missingProps = checkForMissingProps(passport, list)

  return (
    missingProps.length === 0 ||
    (missingProps.length === 1 && missingProps[0] === "cid")
  )
}

const checkPassportValid = passport => {
  const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport
  const byrRange = [1920, 2002]
  const iyrRange = [2010, 2020]
  const eyrRange = [2020, 2030]
  const cmRange = [150, 193]
  const inRange = [59, 76]
  const eyeColorList = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]

  const isValidNum = (el, range) => {
    const hasFourDigits = el => /[0-9]{4}/.test(el)
    return hasFourDigits(el) && el >= range[0] && el <= range[1]
  }

  const isValidMeasure = (el, cmRange, inRange) => {
    const hasCmUnit = el.includes("cm")
    const hasInUnit = el.includes("in")

    if (
      typeof parseInt(el) === "number" &&
      hasInUnit &&
      parseInt(el) >= inRange[0] &&
      parseInt(el) <= inRange[1]
    )
      return true
    if (
      typeof parseInt(el) === "number" &&
      hasCmUnit &&
      parseInt(el) >= cmRange[0] &&
      parseInt(el) <= cmRange[1]
    )
      return true

    return false
  }

  const isValidHex = el => /^#[0-9a-fA-F]/.test(el)

  const isIncludedInList = (el, list) => list.includes(el)

  const isValidId = el => !isNaN(el) && el.split("").length === 9

  return (
    isValidNum(byr, byrRange) &&
    isValidNum(iyr, iyrRange) &&
    isValidNum(eyr, eyrRange) &&
    isValidMeasure(hgt, cmRange, inRange) &&
    isValidHex(hcl) &&
    isIncludedInList(ecl, eyeColorList) &&
    isValidId(pid)
  )
}

const countCompletePassports = (passports, list) => {
  const completePassports = passports.filter(passport => {
    return checkPassportComplete(passport, list)
  })

  return completePassports.length
}

const countValidPassports = (passports, list) => {
  const completePassports = passports.filter(passport => {
    return checkPassportComplete(passport, list)
  })

  const validPassports = completePassports.filter(passport => {
    return checkPassportValid(passport, list)
  })

  return validPassports.length
}

module.exports = {
  parseInputAsObject,
  checkForMissingProps,
  checkPassportValid,
  checkPassportComplete,
  countValidPassports,
  countCompletePassports,
}
