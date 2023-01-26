import sumNumbers from "./13_1_modules.mjs";
// Импорт функции sumMumbers из другого файла
// В файле из которого импортируется функция называется sum
// При таком экспорте/импорте имена могут не совпадать
import {
    one as oneRenamed,
    two
} from './13_1_modules.mjs'
// При таком экспорте/импорте имена переменных должны совпадать
// Но их можно переименовывать с помощью 'as'

const res1 = sumNumbers(10, 2)
console.log(res1)
const res2 = sumNumbers(5, 10)
console.log(res2)

console.log(oneRenamed)
console.log(two)

// 08:37:00