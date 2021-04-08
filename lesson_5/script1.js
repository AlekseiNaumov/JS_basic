// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны
// нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
// 2*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,

'use strict';

const settings = {
    rowCount: 9,
    colCount: 8,
    cellBlack: '#000000',
    cellWhite: '#eeeeee',
};

const start = {
    settings,
    containerElement: null,

    init() {
        this.containerElement = document.getElementById('board');
        this.initCells();
    },
    initCells() {
        this.containerElement.innerHTML = '';
        let char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            if (row > 0) {
                trElem.innerText = `${row}`
            } else {
                trElem.innerText = '\n'
            }
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                if (row === 0) {
                    cell.style.backgroundColor = 'none'
                    cell.style.border = 'none'
                    cell.innerText = char[col];
                    cell.style.textAlign = 'center'
                } else {
                    if (col % 2 === 0 && row % 2 === 0) {
                        cell.style.backgroundColor = this.settings.cellWhite
                    } else if (col % 2 !== 0 && row % 2 !== 0) {
                        cell.style.backgroundColor = this.settings.cellWhite
                    } else {
                        cell.style.backgroundColor = this.settings.cellBlack
                    }
                }
                trElem.appendChild(cell);
            }

        }
    }
}

start.init();
