// 1. Почему код даёт именно такие результаты?
// let a = 1, b = 1, c, d;
// c = ++a; alert(c);
// префиксная форма - инкрементрирование происходит сразу, выводится измененное значение.
// d = b++; alert(d);
// постфиксная форма - сначала выводится значение, потом происходит инкрементрирование.
// c = (2+ ++a); alert(c);
// 2+ будет еще два , ++a даст уже 3, 2 + 3 = 5
// d = (2+ b++); alert(d);
// 2+ будет еще два , b++ будет еще 2, 2 + 2 = 4
// alert(a); alert(b);
// инкрементрирование a и b произошло три раза, поэтому они равны трем.
// 2 // 1 // 5 // 4 // 3

// 2. Чему будет равен x?
// let a = 2;
// let x = 1 + (a *= 2);
// x будет равен пяти: сначала произойдет деиствие в скобках 2*2, потом сложение 1+4, затем присвоение =

// 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт,
//     который работает по следующему принципу:
// - если a и b положительные, вывести их разность;
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.
alert('TASK 3')

function calculator () {
    let a = parseInt(prompt('enter first number: '));
    let b = parseInt(prompt('enter second number: '));
    if (isNaN(a) || isNaN(b)) {
        alert('You entered not a number. Try it again.');
        return calculator()
    }
    if (a >= 0 && b >= 0) {
        return a - b;
    } else if (a < 0 && b < 0) {
        return a * b;
    } else {
        return a + b;
    }
}

alert(calculator())

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод
// чисел от a до 15.
alert('TASK 4')
let number = +prompt('enter number from 0 to 15: ')
let a = 0;
// не делаем break все последующие действия выводятся
switch (number) {
    case 0 : console.log(number + a++);
    case 1 : console.log(number + a++);
    case 2 : console.log(number + a++);
    case 3 : console.log(number + a++);
    case 4: console.log(number + a++);
    case 5: console.log(number + a++);
    case 6: console.log(number + a++);
    case 7 : console.log(number + a++);
    case 8 : console.log(number + a++);
    case 9 : console.log(number + a++);
    case 10 : console.log(number + a++);
    case 11 : console.log(number + a++);
    case 12 : console.log(number + a++);
    case 13 : console.log(number + a++);
    case 14 : console.log(number + a++);
    case 15 : console.log(number + a++);
}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.
alert('TASK 5')
let num1 = 10;
let num2 = 5;

function multiplication(number1, number2) {
    return number1 * number2
}

function addition(number1, number2) {
    return number1 + number2
}

function subtraction(number1, number2) {
    return number1 - number2
}

function division(number1, number2) {
    return number1 / number2
}

console.log(multiplication(num1, num2))
num1 = multiplication(num1, num2)
console.log(addition(num1, num2))
num2  = addition(num1, num2)
console.log(subtraction(num1, num2))
console.log(division(num1, num2))

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

alert('TASK 6')
let arg1 = +(prompt('enter first number: '));
let arg2 = +(prompt('enter second number: '));
let operation = prompt('enter operation *, /, +, -: ')

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '*' : return multiplication(arg1, arg2)
        case '+' : return addition(arg1, arg2)
        case '-' : return subtraction(arg1, arg2)
        case '/' : return division(arg1, arg2)
    }
}
let result = mathOperation(arg1, arg2, operation)
console.log(result)

// 7. *Сравнить null и 0. Попробуйте объяснить результат.
// alert('TASK 7')
//
// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true
// нестрогое равенство и сравнения > < >= <= работают по-разному. Сравнения преобразуют null в число, рассматривая
// его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
// С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: эти значения
// ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.
// Вывод: к любому сравнению с undefined/null, кроме случаев строгого равенства === надо относится с осторожностью и
// добавлять дополнительные проверки.

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
// где val – заданное число, pow – степень.

alert('TASK 8')

let val = +prompt('enter number: ');
let pow = +prompt('enter degree: ');

function power(val, pow) {
    if (pow === 1) {
        return val;
    }
    return val * power(val, --pow);
}

alert(power(val, pow));
