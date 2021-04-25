// 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

'use strict';

const goods = {
    item: 'Apple',
    price: 100,
    quantity: 1
};
const goods2 = {
    item: 'Mango',
    price: 150,
    quantity: 3
};
const goods3 = {
    item: 'Orange',
    price: 75,
    quantity: 3
};

let basketArr = [goods, goods2, goods3]
// let basketArr = []

function basketFilled (basketArr) {
    let basket = document.getElementById('basket');
    if (basketArr.length === 0) {
        basket.innerHTML = `Корзина пуста`;
    } else {
        function countBasketPrice(basketArr) {
            let sumGoods = 0;
            for (let i = 0; i < basketArr.length; i++) {
                sumGoods += basketArr[i].price * basketArr[i].quantity;
            }
            return sumGoods
        }
        function itemsGoods (basketArr) {
            let itemGoods = '';
            for (let i = 0; i < basketArr.length; i++) {
                itemGoods += basketArr[i].item + ' ';
            }
            return itemGoods
        }
        basket.innerHTML = `
                    <div id="basketIsFull" class="basketNoEmpty"> In basket:
                    <div class="good-title">List goods: ${itemsGoods(basketArr)}</div>
                    <div class="good-price">Total price: ${countBasketPrice(basketArr)}</div>
                 </div>`;
    }
}
basketFilled(basketArr);
