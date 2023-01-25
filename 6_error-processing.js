// Обработка ошибок

const fnWithError = () => {
    throw new Error('Some error')
}
// В этой функции у нас ошибка
// Для того чтобы исправить ошибку выполянется код TRY/CATCH
// -- Пример --
try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}
// console.error(error) - выводит целую ошибку
// console.log(error.message) - выводит сообщение об ошибке
console.log('Continue...')
// Если использовать TRY/CATCH, то выполнение кода продолжится

// 05:17:00