// Условные инструкции (if, if else, switch)

/*  if
if (условие) {
// Блок кода, выполняемый ОДНОКРАТНО, если Условие ПРАВДИВО
}
 */
let val = 10
if (val > 5) {
    val += 20
}
console.log(val) // 30

// -- - --

const person = {
    age: 20
}
if (!person.name) {
    console.log('Имя не указано')
}
// Если в объекте person нет свойства name выводим в консоль 'Имя не указано'
// Т.е. !undefined === true

/* if else
if (Условие) {
Блок кода, выполняемый ОДНОКРАТНО, если Условие ПРАВДИВО
} else {
Блок кода, выполняемый ОДНОКРАТНО, если Условие ЛОЖНО
}
 */
let vaal = 10
if (vaal < 5) {
    vaal += 20
} else {
    vaal -= 20
}
console.log(vaal) // -10

/* if else if
if (Условие) {
Блок кода, выполняемый ОДНОКРАТНО, если Условие ПРАВДИВО
} else if (Условие 2) {
Блок кода, выполняемый ОДНОКРАТНО, если Условие 2 ПРАВДИВО
} else {
Блок кода, выполняемый ОДНОКРАТНО, если предыдущие условия ЛОЖНЫ
 */

const age = 10
if (age > 18) {
    console.log('Is agult')
} else if (age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}

// Этот же пример. Но болько без else. Используем только if.
age2 = 17
if (age2 >= 18) {
    console.log('Is agult')
}
if (age2 >= 12 && age2 < 18) {
    console.log('Is teenager')
}
if (age2 < 12) {
    console.log('Is child')
}

// if в функицях
const sunPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }
    return a + b
}
console.log(sunPositiveNumbers(-20,9)) // Numbers are not positive
console.log(sunPositiveNumbers('a',3)) // One of the arguments is not a number
console.log(sunPositiveNumbers(10,8)) // 10



























