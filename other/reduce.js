// Метод REDUCE массивов
/*
array.reduce(callback[, initialValue]
accumulator - аккумулятор зачения после каждой итерации
initialValue - значение может задаваться изначально
currentValue - каждый следующий элемент массива
index - индекс элемента
array - массив
 */

// -- Пример -- сумма элементов массива разным способами
let a = [1, 2, 3, 4]
sum = 0
for (let i = 0; i < a.length; i++) {
    sum = sum + a[i]
}
console.log(sum) // 10
// Стандартный метод вычисления суммы с помощью цикла

let b = a.reduce((accumulator, a) => {
    console.log(accumulator) // вывел в консоль каждую итерацию reduce
    return accumulator + a
}, 0)
console.log(b) // 10
// В данном случае accumulator - это вычисляемое значение
// Если его не указывать, то по дефолту он равен a[0]
// В данном примере accumulator указан и он равен 0 (в конце функции)

// ReduceRight - тоже самое, только начинает с последнего элемента массива
















