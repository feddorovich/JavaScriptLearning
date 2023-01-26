// ASYNC AWAIT - синтаксис для упрощения работы с промисами
// Асинхронная функция

/*
async function asyncFn() {
// Всегда возвращается промис
}
или так
const asyncFn = async () => {
// Всегда возвращается промис
}
 */

const asyncFn = async () => {
    return 'Seccess!'
}
// Здесь мы создаем промис
console.log(asyncFn()) // Promise { 'Seccess!' }
asyncFn()
    .then(value => console.log(value)) // Seccess!
// Здесь мы уже работаем с промисом

// Если есть ошибка
const asyncFn2 = async () => {
    throw new Error('There was an error!')
}
asyncFn2()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))
// Промис автоматически отклонен с указанной ошибкой

// AWAIT - ожидание результата другого промиса
// -- Пример -- ожидание результата await

const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000))
const asyncFn3 = async () => {
    console.log('Timer starts')
    const startTime = performance.now
    await timerPromise()
    const endTime = performance.now
    console.log('Timer ended', endTime() - startTime())
}
// console.log(asyncFn3())
// Ничего непонятно, но очень интересно

// Функция getData с помощью ASYNC/AWAIT
const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
const url = 'https://jsonplaceholder.typicode.com/todos'

try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}
// Промисы из предыдущего файла js поменяли на await
// Работает только в консоли браузера!

// The end!






















