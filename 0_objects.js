// Объект, получение и изменение свойств объекта

const myCity = {
    city: 'New York',
    popular: true,
}

// console.log(myCity.city)
myCity.city = 'Las Vegas'
myCity.country = 'USA'
//console.log(myCity)

delete myCity.country
//console.log(myCity)

// Тоже самое в квадратных скобках

const myCity2 = {
    city: 'New York',
}
myCity2['popular'] = true

const countryPropertyName = 'country'
myCity2[countryPropertyName] = 'USA'

//console.log(myCity2);

// Вложенные объекты (вложеныне свойства)

const myCity3 = {
    city: 'New York',
    info: {
        isPopolar: true,
        country: 'USA'
    }
}

//console.log(myCity3.info.isPopolar)

delete myCity3.info['isPopolar']

//console.log(myCity3)

//Сокращенный формат записи свойств

const name = 'Sergey'
const postsQty = 23

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}

console.log(userProfile)

/* 
Глобальные объекты (window, globalThis, global)
window.console.log == console.log
*/

// Методы объектов (метод - свойство объекта, значение которого - функция)

const myCity4 = {
    city: 'New York',
    cityGreeting: function() {
        console.log('Greeting!!')
    }
}
/* 
city - свойство объекта (не является функцией)
cityGreeting - метод объекта (является функцией)
*/
//console.log(myCity4.cityGreeting)

// 2:14:00 - 10:55:33