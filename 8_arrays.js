// Массивы
// Массив - это объект с цифровыми именами свойств

// -- Пример 1 -- создания массива
const myArray = [1, 2, 3]
console.log(myArray) // [1, 2, 3]

// -- Пример 2 --
const myArray2 = new Array(1, 2, 3)
console.log(myArray2) // [1, 2, 3]

// Изменение элементов в массиве
myArray[2] = 'abc'
console.log(myArray)

// Добавление элементов
myArray[3] = true
console.log(myArray)

// МЕТОДЫ МАССИВОВ
// .push - добавить элеммент в конец массива
myArray.push(10)
console.log(myArray)
myArray.push(true)
console.log(myArray)

// .pop() - удаляет последний элемент в массиве
myArray.pop()
console.log(myArray)
// .pop() можно присвоить переменной
// Тогда эта пеерменная будет равна удаленному элементу
const removedElement = myArray.pop()
console.log(removedElement) // 10
console.log(myArray) // без элемента 10 - [ 1, 2, 'abc', true ]

// .unshift - добавить элемент в начало массива
myArray.unshift('name')
console.log(myArray)

// .shift - удалить первый элемент в массиве
myArray.shift()
console.log(myArray)
// Все эти методы мутируют оригинальный массив

// .forEach - перебирает элементы массива, не меняет оригинальный массив
console.log(myArray2)
myArray2.forEach(el => console.log(el * 2))
// В вызове метода передается функция
// forEach перебирает все элементы массива и умножает их на 2

// .map - как и .forEach перебирает элеменнты массива и вохвращает новый массив
// .forEach ничего не возвращает
// Оригинальный массив так же не изменяется
// .map удобно использовать для присвания массива новой переменной
console.log(myArray2)
const newArray = myArray2.map(el => el * 3)
console.log(newArray)
// .map - возвращает новый массив с уже умноженными элементами в этом массиве
// .forEach вернул бы просто числа

// так же этот пример можно записать следующим образом:
const  newArray2 = myArray2.map((el) => {
    return el * 3
})
console.log(newArray2)
// используюя return вы возвращаем результат явно

// так же этот пример можно записать обычной функцией:
const  newArray3 = myArray2.map(function (el) {
    return el * 4
})
console.log(newArray3)

// 06:20:00




































