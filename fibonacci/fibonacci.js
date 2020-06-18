function fibonacci(i) {
    if (i === 0) {
        return i
    } else if (i === 1) {
        return i
    } else {
        return fibonacci (i - 2) + fibonacci (i - 1)
    }
}

module.exports = fibonacci
