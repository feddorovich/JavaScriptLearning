// Классы (позволяют создавать прототипы для объектов)
// А на основании прототипов создаются экземпляры
// Экземпляры могут иметь собственные свойства и методы
// Экземпляры наследуют свойства и методы прототипов

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}
// constructor и upvote - это методы
// Переменная this указыввает на экземпляр класс
// Экземпляр создается с помощью вызова new

const firstComment = new Comment('First comment')
// Здесь вызывается функция constructor, которая возвращает новый объект
// Объект наследует все методы класса Comment

// НАСЛЕДОВАНИЕ ПО ЦЕПОЧКЕ
// firstComment. - можно посмотреть методы
// сначала идует методы класса (text, votesQty, upvote, а затем методы объекта)

// ПРОВЕРКА ПРИНАДЛЕЖНОСТИ
// Происходит при помощи оператора instanceof
console.log(firstComment instanceof Comment) // true
console.log(firstComment instanceof Object) // true
console.log(firstComment instanceof Array) // false

// ВЫЗОВ МЕТОДОВ
firstComment.upvote()
console.log(firstComment.votesQty) // 1
firstComment.upvote()
console.log(firstComment.votesQty) // 2

// ПРОВЕРКА ПРИНАДЛЕЖНОСТИ СВОЙСТВ ЭКЗЕМПЛЯРУ ОБЪЕКТА
console.log(firstComment.hasOwnProperty('text')) // true
console.log(firstComment.hasOwnProperty('votesQty')) // true
console.log(firstComment.hasOwnProperty('upvote')) // false
console.log(firstComment.hasOwnProperty('hasOwnProperty')) // false
// У экземпляра firstCommet есть свойства text и votesQty
// upvote наследуется от класса Comment
// hasOwnProperty наследуется от Object

// НЕСКОЛЬКО ЭКЗЕМПЛЯРОВ КЛАССА
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

secondComment.upvote()
console.log(secondComment.votesQty) // 1
secondComment.upvote()
console.log(secondComment.votesQty) // 2
secondComment.upvote()
console.log(secondComment.votesQty) // 3
// и т.д.

// СТАТИЧЕСКИЕ МЕТОДЫ (метод доступен как свойство)
// НО НЕ НАСЛЕДУЕТСЯ экземплярами класса
class Comment2 {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

console.log(Comment2.mergeComments('First comment', 'Second comments'))
// Метод доступен, не нужно создавать новый объект для этого

// РАСШИРЕНИЕ ДРУГИХ КЛАССОВ
class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}
const myArray = new NumbersArray(2, 5, 7)
console.log(myArray)
console.log(myArray.sum())
// extends - расширяет другой класс





// 09:16:00



















