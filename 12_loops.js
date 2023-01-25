// Циклы (for, for .. in, while, do ... while, for ... of ...)
// Все циклы это инструкции

/* Цикл FOR
for (Начальная инструкция; Условие; Итерационное действие) {
// Блок кода, выполняемый на каждой итерации
}
 */

for (let i = 0; i < 5; i++) {
    console.log(i)
}
// Циклы можно использовать для массивов
// Но рекомендуется использовать функции высшего порядка для массивов
// Это forEach, map, reduce и т.д.

const myArray = ['first', 'second', 'third']
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}
// В данном случае лучше использовать метод массивов forEach
myArray.forEach((element, index) => {
    console.log(element, index)
})
// В консоль выведется и то что написано в элементе и его индекс

/* Цикл WHILE
while (Условие) {
// Блок кода, выполняемый на каждой итерации
}
 */

let i = 0
while (i < 5) {
    console.log(i)
    i++
}
// Если бы не было i++ цикл будет выполняться бесконечно

/* Цикл DO WHILE
do {
// Блок кода, выполняемый на каждой итерации
} while (Условие)

Цикл DO выполнится минимуи один раз
 */

let a = 0
do {
    console.log(a)
    a++
} while (a < 5)

/* Цикл FOR IN
for (key in Object) {
// Действия с каждым свойством объекта
// Значения свойства - Object[key]
 */

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}
// Для перебора свойств объекта можно использовать forEach
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})
// Получим тоже самое в виде массива
// Т.е. получение всех ключей объекта в виде массива

// Можно перебирать сразу значения объекта (value)
Object.values(myObject).forEach(value => {
    console.log(value)
})
// Получили массив со значениями объекта

/*
Object.keys и Object.values ({}) - конвертирует объект в массив
 */

// Цикл FOR IN для массивов
const myArr = [true, 10, 'abc', null]
for (const key in myArr) {
    console.log(myArr[key])
}
// Так делать можно. Но лучше использовать свои методы массиво для этого.
// forEach предпочтительнее

/* Цикл FOR OF -- Пример 1 --
for (Element of Iterable) {
// Действие с определенным элементом
}
 */
const myString = 'Hey'
for (const letter of myString) {
    console.log(letter)
}
// Можно перебрать все символы в строке с помощью for ... of

// -- Пример 2 --
const array = [true, 10, 'abc', null]
for (const element of array) {
    console.log(element)
}
// Можно перебрать все элементы в массиве с помощью for ... of
// Но синтаксис с forEach более приориетный для массива
array.forEach(el => {
    console.log(el)
})
// Тоже самое только с помощью forEach
// Так же for ... of НЕЛЬЗЯ импользовать для объектов

// По итогу:
// Лучше всего объекты с помощью Object.keys и Object.values конвертировать
// в массив. И уже дальше в массиве с помощью методов работать.
// Циклы использовать можно. Но приоритетнее использовать методы.

// 07:57:00



















