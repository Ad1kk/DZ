const name = prompt("Name")
console.log("Hello " + name)

const arr1 = [1,2,3,4,'hello']
const arr2 = [9,8,7,'apple', 2,3,4]
if (arr1.length < arr2.length) {
    console.log("Второй массив больше")
} else if (arr1.length > arr2.length) {
    console.log("Первый массив больше")
} else {
    console.log('Они равны')
}

const color = prompt("Введите цвет")

switch (color) {    
    case "green":
        console.log("Зеленый")
        break;
    case "red":
        console.log("красный")
        break;
    case "yellow":
        console.log("Желтый")
        break;
}