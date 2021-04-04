// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
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

let basket = [goods, goods2, goods3]

function countBasketPrice(basket) {
    let sumGoods = 0;
    for (let i = 0; i < basket.length; i++) {
        sumGoods += basket[i].price * basket[i].quantity;
    }
    return sumGoods
}
console.log(countBasketPrice(basket));