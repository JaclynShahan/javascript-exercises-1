function repeatString (string, times) {
  var output = ''
  for (let i = 0; i < times; i++) {
    output += string
  }
  return output
}
module.exports = repeatString
