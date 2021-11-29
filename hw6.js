// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string1='hello world';
// console.log(string1.length);
// let string2='lorem ipsum';
// console.log(string2.length);
// let string3='javascript is cool';
// console.log(string3.length);
// - Перевести до великого регістру наступні стрінгові значенн
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let string1='hello world';
// console.log(string1.toUpperCase());
// let string2='lorem ipsum';
// console.log(string2.toUpperCase());
// let string3='javascript is cool';
// console.log(string3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let string1='HELLO WORLD';
// console.log(string1.toLowerCase());
// let string2='LOREM IPSUM';
// console.log(string2.toLowerCase());
// let string3='JAVASCRIPT IS COOL';
// console.log(string3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let string=' dirty string   '
// console.log(string.trim(' '))
// //
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// const stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);
// document.write(arr)

//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// const delete_characters = (str,lenght) => {
//   return str.substr(0,lenght);
// }
// let str='Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7))
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// const insert_dash=(str)=>{
// let autochange=str.split(' ').join('-').toUpperCase();
// return autochange
// }
// let str="HTML JavaScript PHP"
// document.writeln(insert_dash(str))
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// const fun=(arg)=>{
//   let modearg=arg[0].toUpperCase()+ arg.substring(1)
//   return modearg
// }
// document.write(fun('fwegareger'))
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// const capitallize=(str)=>{
//   return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
// }
// document.write(capitallize('i am developer'))