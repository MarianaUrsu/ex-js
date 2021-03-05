/*Задание №3
Дан объект: 
const urlsDomain = {
    'Магазин доменов' : '/domain/shop/',
    'Премиум домены'  : '/domain/premium/',
    'Освобождающиеся' : '/domain/new/rereg',
};

Нужно вывести текст с каждой парой ключ-значение в формате 
“Ссылка на магазин доменов - /domain/shop/”. Большие буквы заменить на маленькие.
*/

const urlsDomain = { //создаем объект
    'Магазин доменов' : '/domain/shop/',
    'Премиум домены'  : '/domain/premium/',
    'Освобождающиеся' : '/domain/new/rereg',
};
function Vivod(){ //создаем функцию 
 let str = "";
 for (let key in urlsDomain) { //цикл для перепобора всех свойств объекта
     str = key + " " +urlsDomain[key]; //строке присваиваем ключ и значение
     console.log("Ссылка на " + str.toLowerCase()); 
     str = ""; //присваиваем строке пустое значение
 }
}
Vivod(); //вывываем функцию