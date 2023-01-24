// Мутации объектов JS

const a = 10
let b = a // На этом этапе копируется только значение (т.е. 10)
b = 30
//console.log(a)
//console.log(b)

const person = {
    name: 'Bob',
    age: 21
}

const person2 = person

person2.age = 26
person2.isAdult = true

//console.log(person.age)
//console.log(person.isAdult)

// Поскольку объект - это ссылочный тип person изменяется, если изменяется person2

// Как избежать мутаций
// Вариант 1 - метод .assign объекта Object

const man = {
    name: 'John',
    age: 25
}

const man2 = Object.assign({}, person)
man2.age = 26

//console.log(man.age) // 25
//console.log(man2.age) // 26
// Теперь man не будет изменяться, если изменится man2
// Этот способ подходит, если в исходном объекте нет вложенных объектов

// Вариант 2 (... - spread оператор)
// Оператор разделения объекта на свойства

const woman = {
    name: 'Anna',
    age: 25
}

const woman2 = { ...woman}
woman2.name = 'Alice'

//console.log(woman.name) // Anna
//console.log(woman2.name) // Alice
// ССылки на вложененые объекты сохраняются так же, как и в варианте 1

// Вариант 3 (создать копию объекта и полностью избежать мутаций)
// Конвертируем объект в строку .stringify
// Парсим .parse
// Так же делаем Объект в JSON и JSON в объект 

const superman = {
    name: 'Bob',
    age: 25
}

const superman2 = JSON.parse(JSON.stringify(superman))
superman2.name = 'Alice'

console.log(superman.name) // Bob
console.log(superman2.name) // Alice
// Ссылки на вложенные объекты не сохраняются

// 02:42:00