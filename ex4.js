/*Задание №4
Дана строка “На 25 февраля 2021 года стоимость домена в зоне .ru составляет 199 рублей.” 
Нужно извлечь цену домена без лишних символов, используя:
substr
substring
slice
match
replace и split
*/

let str = "На 25 февраля 2021 года стоимость домена в зоне .ru составляет 199 рублей."; 
console.log(str.substr(63, 3)); //метод substr
console.log(str.substring(63,66)); //метод substring
console.log(str.slice(-11,-8)); //метод slice
console.log(str.match(/\s(\d{1,})\sрублей.$/)[1]); //метод match

let str2 = "" + str.match(/\s(\d{1,})\sрублей.$/);//присваиваем переменной результат выполнения метода match
console.log(str2.replace(/\D+/g, ""));//replace
console.log(str.split(" ")[11]); //получим массив ["На", "25", "февраля", "2021", "года", "стоимость", "домена", "в", "зоне", ".ru", "составляет", "199", "рублей."]