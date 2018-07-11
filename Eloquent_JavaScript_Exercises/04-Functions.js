//Minimum
function min() {
    var result = Infinity
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < result) {
            result = arguments[i]
        }
    }
    return result
}
//Recursion
function isEven(n) {
    if (n === 1) {
        return false
    }
    if (n === 0) {
        return true
    }
    return isEven(n - 2)
}
//Bean counting：
function countBs(str) {
    var count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            count++
        }
    }
    return count
}
// way-two：
function countBs(str) {
    return countChars(str, "B")
}

function countChars(str, char) {
    var count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++
        }
    }
    return count
}