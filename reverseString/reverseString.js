function reverseString (str) {
  let strArr = str.split('')
  console.log(strArr)
  let newStr = strArr.reverse()
  console.log(newStr)
  let answer = newStr.join('')
  console.log(answer)
  return answer
}

module.exports = reverseString
