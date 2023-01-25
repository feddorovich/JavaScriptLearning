// Тернарный оператор (иммет три операнда)
// Конструкция с тернарным оператором - это выражение
// А выражение возвращает значение

// Условие ? Выражение 1 : Выражение 2
/* или
Условие
    ? Выражение 1
    : Выражение 2
 */

// -- Пример 1 --
const value = 11

value
    ? console.log('Условие истино')
    : console.log('Условие ложно')

/* -- Пример 2 --
const value1 = 11
const value2 = 25

value1 && value2
    ? myFunction1(value1, value2)
    : myFunction2()
// value1 и Value2 позитивные числа, значит выполняется условие 1 (?) */

// -- Пример 3 --
let value0 = 11
console.log(value0 >= 0 ? value0 : -value0) // 11

value0 = -5
const res = value0 >= 0 ? value0 : -value0
console.log(res) // 5

// 07:22:00


















