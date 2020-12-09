const formatEl = el => {
  const [conditions, pass] = el.split(":")
  const password = pass.replace(" ", "")
  const [range, letter] = conditions.split(" ")
  const [int1, int2] = range.split("-")

  return {
    int1,
    int2,
    letter,
    password,
  }
}

const passwordChecker = password => {
  const { password: pass, letter, int1: min, int2: max } = formatEl(password)
  const letterOcurrences = pass.split("").filter(el => el === letter).length
  return letterOcurrences >= min && letterOcurrences <= max
}

const passwordChecker2 = password => {
  const { password: pass, letter, int1, int2 } = formatEl(password)

  const passLetters = pass.split("")
  const firstIsAMatch =
    passLetters[int1 - 1] === letter && passLetters[int2 - 1] !== letter
  const secondIsAMatch =
    passLetters[int1 - 1] !== letter && passLetters[int2 - 1] === letter

  return firstIsAMatch || secondIsAMatch
}

const validatePasswords = (passwordList, passwordChecker) =>
  passwordList.map(password => passwordChecker(password)).filter(el => el)
    .length

module.exports = {
  formatEl,
  passwordChecker,
  passwordChecker2,
  validatePasswords,
}
