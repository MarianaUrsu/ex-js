/* Задание №7
Составить регулярное выражение для проверки валидации цены 
(не отрицательное число, содержит копейки после запятой, сумма не превышает 10000). 
Примеры валидных значений:
0,03
23,99
10000,00
*/ 
let regul_exp = /^[0-9]{1,4}(,[0-9]{1,2})|[1]{1}[0]{4}(,[0]{1,2})$/;
let str1 = "10000,01";
let str2 = "10000,00";
let str3 = "23,99";
let str4 = "-55,11";
console.log(str1 + " : " + regul_exp.test(str1));
console.log(str2 + " : " + regul_exp.test(str2));
console.log(str3 + " : " + regul_exp.test(str3));
console.log(str4 + " : " + regul_exp.test(str4));