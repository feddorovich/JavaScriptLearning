/* JSON - JS Object Notation
Формат обмена данными 

{
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}

Передается в виде строки

{"userId":1,"id": 1,"title":"Test title","status":{"completed":false}}
*/

/*Конвертация 
JSON в объект - JSON.parse()
Объект в JSON - JSON.stringify()
*/

const post = {
    title: 'My post',
    likesQty: 5
}

JSON.stringify(post)
//console.log(post)

const postStringified = JSON.stringify(post)
JSON.parse(postStringified)

//console.log(postStringified)