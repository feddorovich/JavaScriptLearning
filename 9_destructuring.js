// Деструктуризация (Destructuring assignment)

const userProfile = {
    name: 'Sergey',
    commentsQty: 23,
    hasSignedAgreement: false,
}
const {name, commentsQty} = userProfile
const {hasSignedAgreement} = userProfile
console.log(name) // Sergey | новая переменная
console.log(hasSignedAgreement) // 23 | Это тоже новая переменная
// Объявил новые переменные и присвоил значение на основе свойств объекта

// Пример деструктуризации массивов:
const fruits = ['Apple', 'Banana']
const [fruitOne, fruitTwo] = fruits
console.log(fruitOne) // Apple
console.log(fruitTwo) //Banana

// Деструктуризация в функциях
const userInfo = ({name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}
console.log(userInfo(userProfile)) // User Sergey has 23 comments
// Функции userInfo передается объект userProfile
// Объект приходит в функцию по ссылке
// И в блоке параметров выполняем деструктуризацию
// Т.е. берем свойства с именами name и commentsQty из значения, которое передается в функцию
// Создаем новые переменные с именами name и commentsQty
// И приваиваем им своответсвующие значения ('Sergey' и 23)

// 06:34:00


































