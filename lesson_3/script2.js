// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// корзина состоит из массива в который входят три масива 1. Название товара 2. кол-во товара 3. цена за еденицу
let basket = [['Яблоки', 50, 1], ['Манго', 120, 3], ['Апельсины', 70, 2], ['Melon', 100, 5]];

function countBasketPrice(basket) {
    let result;
    let sumGoods = 0;
    for (let i = 0; i < basket.length; i++) {
        result = basket[i][1] * basket[i][2];
        sumGoods += result;
    }
    return sumGoods
}
console.log(countBasketPrice(basket));
