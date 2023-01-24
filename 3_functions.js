// Функция - это объект

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

//console.log(myFn(10, 3))

// Передача значения по ссылке

const personeOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1
    return person
}
increasePersonAge(personeOne)
//console.log(personeOne.age)

// Внутри функции не рекомендуется мутировать внешние объекты (как в примере выше)
// Можно воспользоваться Object.assign чтобы не мутировать функцию

function increasePersonAge2(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}
const updatedPersonOne = increasePersonAge2(personeOne)
//console.log(personeOne.age)
//console.log(updatedPersonOne.age)

// Колбэк функции

function prinyMyName() {
    console.log('Sergey')
}
console.log('Start')
setTimeout(prinyMyName, 1000)
// setTimeout - колбэк функция, которая вызывает функцию printMyName через 1000 милисекунд

// Облати видимости JS
// Для того чтобы JS не создавал глобальные переменные можно включить строгий режим
// 'use strict' в начале js файла запрещает использование необъявленных переменных


// 03:44:10


















