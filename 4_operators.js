// Операторы - встроенная в JS функция

// ! - оператор не - всегда возвращает boolean
// &&, || - возвращают значение одного из операндов

// Ложные значения
// false, 0, ''(пустая строка), undefined, null

// typeof (унарный префиксный оператор)

console.log(typeof 'Sergey') // string
console.log(typeof false) // boolean

// Оператор отрицания !! (дважды)
// Конвертирует любое значение в булевое
!!10 // true
!!0 // false
!!'abc' // true
!!'' //false
!!true // true
!!false // false

// Операторы &&,|| - операторы короткого замыкания
// Выражение 1 && Выражение 2
// Если Выражение 1 false, Выражение 2 игнорируется
// Возвращается результат Выражения 1

// Выражение 1 || Выражение 2
// Если выражение 1 истино, Выражение 2 игнорируется
// Возвращается результат Выражения 1

let b = 10
b && console.log('Done!') // Возвращает Done!

let c
c && console.log('Done!') // Возвращает undefined

/// ... - Оператор разделения объекта на свойства

const button = {
    width: 200,
    text: 'Buy',
    color: 'black'
}
const redButton = {
    ...button,
    color: 'red'
}
console.table(redButton)
// color 'red' добавится к объекту button
// если в button уже есть color, он его перезапишет
// в button color останется black

const buttonInfo = {
    text: 'Buy'
}
const buttonStyle = {
    color: 'yellow',
    width: 200,
    heighr: 300
}
const buttonFull = {
    ...buttonInfo,
    ...buttonStyle
}
console.table(buttonFull)
// Соединили два объекта в buttonFull
// Мутирования объектов не будет, если нет вложенных объектов

// Конкатенация строк (соединение строк)
// Шаблонные строки

const hello = 'Hello'
const world = 'World'
const greeting = `${hello} ${world}`
// `` - обратные кавычки
// const greeting - шаблонная строка
console.log(greeting)

// 04:38:00


























