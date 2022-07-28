function numbers (num1, num2) {
    console.log(Math.min(num1, num2))
}
let number = {
    num1: prompt("Введите число"),
    num2: prompt("Введите число"),

}
numbers(number.num1, number.num2)

function countChar () {
    const num = prompt("???")
    console.log(num.length)
}
countChar()