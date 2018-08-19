//looping a triangle
var a = ""
for (let i = 0; i < 7; i++) {
    a += "#"
    console.log(a)
}
//FizzBuzz
for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log("FizzBzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
//Chess board：
var even = "#"
for (i = 1; i < n; i++) {
    even += " #"
}
var odd = " "
for (i = 0; i < n; i++) {
    odd += "# "
}
for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        console.log(even)
    } else {
        console.log(odd)
    }
}
//way-two：
var result = ""
for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        var s = (x + y) % 2
        if (s === 0) {
            result += "#"
        } else {
            result += " "
        }
    }
    result += "\n"
}
console.log(result)