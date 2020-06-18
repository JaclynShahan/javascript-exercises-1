function palindromes(str) {
    console.log(str)
    let splitStr = str.split("")
    console.log(splitStr)
    let reverseArr = splitStr.reverse()
    console.log(reverseArr)
    let answer = reverseArr.join("")
    console.log(answer)
    if (str === answer) {
        return true
    } else {
        return false
    }
}

module.exports = palindromes
