const catalogGoods = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.goods_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <button class="add_card" data-product="${good.id_product}">Добавить в корзину</button>
                </div>`;
    }
}

const basket = {
    cardGoods: null,
    catalog: null,
    cardButton: null,
    basket: null,
    inBasket: [],
    fullBasket: {},
    catalogGoods,
    goods: [{
        id_product: 1,
        goods_name: 'Apple',
        price: 100,
        quantity: 1
    },
    {
        id_product: 2,
        goods_name: 'Mango',
        price: 150,
        quantity: 1
    },
    {
        id_product: 3,
        goods_name: 'Orange',
        price: 75,
        quantity: 1
    }],

    init() {
        this.catalog = document.getElementById('catalog');
        this.renderCatalog();
        this.basket = document.getElementById('basket');
        this.basket.innerText = `Корзина пуста`;
        this.initEventTouch();
    },

    renderCatalog() {
        for (let i = 0; i < this.goods.length; i++) {
            this.catalog.insertAdjacentHTML('beforeend', this.catalogGoods.render(this.goods[i]));
        }

    },

    initEventTouch() {
        this.catalog.addEventListener('click', () => this.buttonClick(event));
    },

    buttonClick(event){
        if (!this.isButton(event)) return;
        this.fillBasket(event)
        this.whatInBasket();
    },

    isButton(event) {
        return event.target.tagName === 'BUTTON'
    },

    fillBasket(event) {
        const item = +event.target.dataset.product
        for (let i = 0; i < this.goods.length; i++) {
            if (item === this.goods[i].id_product) {
                this.inBasket.push(this.goods[i])
            }
        }
    },

    whatInBasket() {
        let finishBasket = `${this.renderBasket()} Всего добавлено товаров на сумму: ${this.countBasketPrice()}`;
        this.basket.insertAdjacentHTML('beforeend', finishBasket);
    },

    renderBasket () {
        this.clearBasket();
        let  goodsListInBasket = '';
        for (let i = 0; i < this.inBasket.length; i++) {
            goodsListInBasket += `<div><b>Вы добавили в корзину:</b> ${this.inBasket[i].goods_name} <b>Количество</b>: ${this.inBasket[i].quantity}</div>`;
        }
        return goodsListInBasket;
    },

    countBasketPrice() {
        let sumGoods = 0;
        for (let i = 0; i < this.inBasket.length; i++) {
            sumGoods += this.inBasket[i].price * this.inBasket[i].quantity;
        }
        return sumGoods
    },

    clearBasket() {
        this.basket.innerText = ``
    }
}

basket.init();

