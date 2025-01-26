
var login = prompt("Введите ваше имя:");
var age = +prompt("Введите ваш возраст:");

alert("Добро пожаловать, " + login + "! Выберите примеры и посмотрите результаты в консоли.");


var num1 = +prompt("Введите первое число для примеров:");
var num2 = +prompt("Введите второе число для примеров:");

ы
console.log("Примеры и результаты:");

var sum = num1 + num2;
var userSum = +prompt(num1 + " + " + num2 + " = ?");
console.log(`${num1} + ${num2} = ${sum} (Ваш ответ: ${userSum})`);

var diff = num1 - num2;
var userDiff = +prompt(num1 + " - " + num2 + " = ?");
console.log(`${num1} - ${num2} = ${diff} (Ваш ответ: ${userDiff})`);

var product = num1 * num2;
var userProduct = +prompt(num1 + " * " + num2 + " = ?");
console.log(`${num1} * ${num2} = ${product} (Ваш ответ: ${userProduct})`);

var quotient = num1 / num2;
var userQuotient = +prompt(num1 + " / " + num2 + " = ?");
console.log(`${num1} / ${num2} = ${quotient} (Ваш ответ: ${userQuotient})`);

var remainder = num1 % num2;
var userRemainder = +prompt(num1 + " % " + num2 + " = ?");
console.log(`${num1} % ${num2} = ${remainder} (Ваш ответ: ${userRemainder})`);

alert("Все примеры решены. Проверьте результаты в консоли разработчика.");


var x = +prompt("Введите значение X:");
var y = +prompt("Введите значение Y:");
var z = +prompt("Введите значение Z:");

var res = (x + y + z) / 3;
alert("Среднее арифметическое введенных чисел: " + res.toFixed(2));
