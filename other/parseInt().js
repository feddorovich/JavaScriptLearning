// parseInt() преобразует строку в число
// Например
function convertToInteger(str) {
    return parseInt(str)
}

console.log(convertToInteger("007")) // 7

// Или преобразует число из двоичной системы в обычное

function convertToInteger2(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger2("10011")); // 19
// 2 значит двоичная система
// Число может быть от 2 до 36