// Функциональные выражения
// Функциональные выражения всегда анонимные

const myFunction = function (a, b) {
    // тело функции
};
// В данном случае переменной присваивается анонимная функция

// Вызов анонимной функции
setTimeout(function () {
    console.log('Отложенное сообщение 1')
}, 1000);

// Стрелочные функции (тоже без имени)
(a, b) => {
    // тело функции
};

// Можно задать имя стрелоной функции
const myFn = (a, b) => {
    // тело функции
};

// Вызов анонимной стрелочной функции
setTimeout(() => {
    console.log('Отложенное сообщение 2')
    }, 1000);

// Круглые скобки можно опустить если
// У стрелочной функции 1 параметр
a => {
    // Тело функции
};

// Фигурные скобки можно опустить если
// Тело фунции состоит из одного выражения
(a, b) => a + b;
// Неявно возвражает результат (без слова return)

// -- Пример 1 -- Значение папаметров функции по умолчанию
const multByFactor = (value, multiplier = 1) => {
    return value * multiplier
};
console.log(multByFactor(5)) // 5
console.log(multByFactor(10, 2)) // 20
// В данном случае возможен вызов функции с одним числом
// Потому что multiplier по дефолту равен 1

// -- Пример 2 -- со значением по умолчанию
// Неявный возврат объекта из функции
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
});
// Для того чтобы вернуть объект неявно нужно обернуть его в круглые скобки
// addedAt иммет дефолтное значение Date
const firstPost = {
    id: 1,
    author: 'Sergey',
}
console.table(newPost(firstPost))
// В данном примере функция newPost добавляет текущую дату к объекту firstPost

// 05:08:00




















