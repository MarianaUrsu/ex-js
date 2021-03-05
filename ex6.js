/* Задание №6. 
Составить регулярное выражение, которое проверяет соответствие url критериям “это локалка, тска или прод, при этом b2b или b2c”. 
Примеры:
https://www.reg.ru/
https://b2b.reg.ru/
https://ts42.ts.dev.reg.ru/
https://b2b42.ts.dev.reg.ru/
https://ts21675.ts.dev.reg.ru/
https://b2b21675.ts.dev.reg.ru/
https://www.local.dev.reg.ru/
https://b2b.local.dev.reg.ru/
*/ 
let regul_exp = /^(https:\/\/){1}(w{3}\.){0,1}(((b2b\.){0,1}reg\.ru\/)|((((b2b\d+)\.ts\.)|((ts\d+)\.ts\.)|((b2b\.){0,1}local\.))dev\.reg\.ru\/))$/;
let str1 = "https://www.reg.ru/";
let str2 = "https://b2b.reg.ru/";
let str3 = "https://ts42.ts.dev.reg.ru/";
let str4 = "https://b2b42.ts.dev.reg.ru/";
let str5 = "https://ts21675.ts.dev.reg.ru/"
let str6 = "https://b2b21675.ts.dev.reg.ru/";
let str7 = "https://www.local.dev.reg.ru/";
let str8 = "https://b2b.local.dev.reg.ru/";
let str9 = "https://www...reg.ru/";
let str10 = "https://b2b..reg.ru/";
let str11 = "https://www.b2b45455.reg.ru/";
let str12 = "https://ts.dev.reg.ru/";
console.log(str1 + " : " + regul_exp.test(str1));
console.log(str2 + " : " + regul_exp.test(str2));
console.log(str3 + " : " + regul_exp.test(str3));
console.log(str4 + " : " + regul_exp.test(str4));
console.log(str5 + " : " + regul_exp.test(str5));
console.log(str6 + " : " + regul_exp.test(str6));
console.log(str7 + " : " + regul_exp.test(str7));
console.log(str8 + " : " + regul_exp.test(str8));
console.log(str9 + " : " + regul_exp.test(str9));
console.log(str10 + " : " + regul_exp.test(str10));
console.log(str11 + " : " + regul_exp.test(str11));
console.log(str12 + " : " + regul_exp.test(str12));