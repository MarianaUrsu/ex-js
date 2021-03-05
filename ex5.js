/* Задание №5
Конвертировать дату 21-1-2021 в формат YYYY.MM.DD
*/
let oldformatdate  = new Date('21-1-2021'); //задаем переменную по типу Date и присваиваем ей значение 21-1-2021
console.log(moment("21-1-2021", "DD-MM-YYYY").format("YYYY.MM.DD")); //меняем формат даты на YYYY.MM.DD

