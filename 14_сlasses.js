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





















