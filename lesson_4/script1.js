// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на
// выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245
// мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо
// выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function getNumber() {
    while (true) {
        let userNumber = parseInt(prompt('Enter number from 0 to 999: '));
        if (isNaN(userNumber) || userNumber < 0) {
            alert('Error number. Number should be from 0 to 999. Try again.');
            continue;
        }
        return userNumber;
    }
}

function getArray(number) {
    let arr = [];
    while (true) {
        let i = number % 10;
        arr.push(i);
        number = Math.trunc(number / 10);
        if (number === 0) {
            return arr;
        }
    }
}

function getObject () {
    let number = getNumber();
    let arr = getArray(number);
    const obj = {};
    if (arr.length > 3) {
        console.log('The number is more than 999.');
        console.log(obj)
        return obj;
    } else {
        obj.units = arr[0];
        obj.tens = arr[1];
        obj.hundreds = arr[2];
        console.log(obj)
        return obj;
    }
}

getObject();
