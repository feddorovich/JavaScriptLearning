// Модули
// Моули нужны чтобы разный код хранился в разныйх файлах

/*
Например в файле moduleOne.js храится код:
const myName = () => {
    console.log('Sergey')
}

export default myName
// Здесь выполняется экспорт myName
 */

/*
В другом файле, например, modulesTwo.js

import printMyName from './moduleOne.js'
// импортируем переменную
// названия переменных могут не совпадать
printMyName()
 */

// Расширения файлов моудлей не .js, а .mjs

const sum = (a, b) => a + b
export default sum

















