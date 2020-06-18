const removeFromArray = function (...args) {
    const arr = args[0]
    const newArr = []
    arr.forEach((i) => {
        if (!args.includes(i)) {
            newArr.push(i)
        }
    })
    return newArr
}

module.exports = removeFromArray
