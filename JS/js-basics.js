


//Таски на переменные:
//1) Создайте две переменные a и b. Выведите в консоль результ их умножения.
const a = 10;
const b = 11;
console.log("Results = ", a * b);

//2) Создайте две переменные c и d. Выведите в консоль результат деления.
const c = 10;
const d = 2;
console.log("Results = ", c / d);

//3) Создайте две переменные e и f. Выведите в консоль результат сложения.
const e = 5;
const f = 10;
console.log("Results = ", e + f); 

//4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

const value1 = 11;
const value2 = true;
const value3 = "java script";
const value4 = "100";
console.log("value1:", value1);
console.log("value2:", value2);
console.log("value3:", value3);
console.log("value4:", value4);
console.log("value1:", typeof value1);
console.log("value2:", typeof value2);
console.log("value3:", typeof value3);
console.log("value4:", typeof value4);

//5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --

let num = 1;
num += 11;
console.log('num += ', num);
num -= 11;
console.log('num -= ', num);
num *= 11;
console.log('num *= ', num);
num /= 11;
console.log('num /= ', num);
num += 1;
console.log('num += ', num);
num -= 1;
console.log('num -= ', num);

/******************************************************************/

//Таски на prompt:

//1) Запросить число у пользователя, возвести его в квадрат и вывести

const numSquared = prompt("Введите число:");
alert("Ваше число в квадрате: " + (numSquared ** 2));

//2) Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.

const number1 = Number(prompt("Введите первое число:"));
const number2 = Number(prompt("Введите второе число:"));
alert("Получаем среднее арифметическое двух чисел: " + (number1 + number2) / 2);

//3) Перевести число минут в секунды. Число спрашивать у пользователя.

const numMin = prompt('Введите минуты:');
alert('Получаем результат в секундах: ' + numMin * 60); 

//4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.

const greeting = "Hello, ";
let userName;
userName = prompt("Введите пожайлуста Ваше имя:");
alert(greeting + userName + "!");


/******************************************************************/

//Таски на условия:

//1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

const value5 = prompt("Угадай чиcло:");
if (value5 == 10) {
    alert("Верно.");
} else {
    alert("Не угадал.");
}

/******************************************************************/

//2) Напишите две проверки.

//Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.

let test = prompt('Проверь число?');
if (test == 8) {
    alert('Верно!');
} else {
  alert('НЕ верно!');  
}

//Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'

let test = prompt('Проверь число?');
if (test != 8) {
    alert('Верно!');
} else {
  alert('НЕ верно!');  
}

//Проверьте работу скрипта при test, равном true, false.

/******************************************************************/

//3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

const purchase = prompt("Вычислить цену со скидкой(в гривнах):");

if (purchase >= 500 && purchase < 800) {
    alert('Цена со скидкой: ' + purchase * 0.97); 
} else if ( purchase >= 800) {
    alert('Цена со скидкой: ' + purchase * 0.95); 
} else {
    alert ("Скидка не положена, цена товара: " + purchase);
}

/******************************************************************/

//Таски на циклы. Каждую задачу решить всеми тремя циклами!

//1) Вывод чисел от 25 до 0 (порядок уменьшения)

/********  цикл for   ******/

console.group('цикл for')
for (let i = 25; i >= 0; i--) {
    console.log('Число по порядку: ', i);
}
console.groupEnd();

/********  цикл while   ******/

console.group('цикл while')
let i = 25;
while (i >= 0) {
    console.log('Число по порядку: ', i)
    i--;
}
console.groupEnd();

/********  цикл do   ******/

console.group('цикл do')
let y = 25;
do {
    console.log('Число по порядку: ', y);
    y--;
} while (y >= 0);
console.groupEnd();

// //2) Вывод чисел от 10 до 50, которые кратны 5

/********  цикл for   ******/

console.group('цикл for')
for (let i = 10; i <=50; i++) {
    if (i % 5 == 0) {
        console.log('Число кратное 5 c for: ', i);
    }
}
console.groupEnd();

/********  цикл while   ******/

console.group('цикл while')
 let value6 = 10;
 while (value6 <= 50) {
    if (value6 % 5 == 0) {
     console.log('Число кратное 5 c while: ', value6);
 }
    value6++;
 } 
console.groupEnd();

/********  цикл do   ******/

console.group('цикл do')
 let value7 = 10;
 do {
     if (value7 % 5 == 0) {
     console.log('Число кратное 5 c do: ', value7);
     }
        value7++;
     } while (value7 <= 50);
console.groupEnd();

//3) Найти сумму чисел в пределах от 1 до 100.

/********  цикл for   ******/

console.group('цикл for')
let g = 0; 
for (let w = 1; w <=100; w++) {
    g += w;
}
console.log('Сумма чисел в пределах от 1 до 100: ', g);
console.groupEnd();

/********  цикл while   ******/

console.group('цикл while')
let z = 1;
let results = 0;
while (z <= 100) {
    results += z;
    z++;
}
console.log('Сумма чисел в пределах от 1 до 100: ', results);
console.groupEnd();

/********  цикл do   ******/

console.group('цикл do')
let j = 1;
let k = 0;
do {
    k += j;
    j++;
} while (j <= 100);
console.log('Сумма чисел в пределах от 1 до 100: ', k);
console.groupEnd();

//4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит 

const example = 2 + 2 * 2;

/********  цикл for   ******/

 for (let value8; value8 !== example;) {
      value8 = Number(prompt('Решите пример (2+2*2=?)'));
 }  alert("Дааааа!!!");

 /********  цикл while   ******/

let value9;
while (value9 !== example) {
   value9 = Number(prompt("Решите пример (2+2*2=?)")); 
} alert('Верно!'); 

 /********  цикл do   ******/

do {
    value9 = Number(prompt("Решите пример (2+2*2=?)"));
} while (value9 !== example) {
    alert ("2+2*2 равно 6 !");
}

