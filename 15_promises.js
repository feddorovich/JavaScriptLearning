/* ПРОМИСЫ
Промисы (позволяют обрабатывать отложенные во времени события)
Промис - это обещание предоставить результат позже
Промис может вернуть ошибку, если результат предоставить невозможно
У промиса 3 состояния: ожидание, исполнен, отклонен

const myPromise = new Promise ((resolve, reject) => {
Выполнение асинхронных действий
Внутри этой функции нужно в результате вызвать одну из
функций resolve или reject
});

const myPromise = new Promise ((resolve, reject) => {
    .then(value => {
    Действие в случае успешного исполнения промиса
    })
    .catch(error => {
    Действие в случае отклонения промиса
    })

https://jsonplaceholder.typicode.com/
*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))
// response.json так же возвращает promise, потому что данных может быть много
// второй .then покажет объект или массив объектов
// .catch вызывается, если не пришел ответ от сервера

const getData = (url) =>
    new Promise((resolve, reject) =>
    fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
    )
getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data=> console.log(data))
    .catch(error => reject(error))
// Для того чтобы упростить получение промисов и получать 1 промис, а не 2
// Создаем функцию getData, которая возвращает промис

// 10:23:00








































