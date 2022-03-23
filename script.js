"use strict";

let expandingBtnSiblingsArray = [];

//Анимация разворачиваемой кнопки
const expandingBtnClick = (obj) => {
    let bgColor = obj.style.backgroundColor
    if (obj.dataset.expandingButton === "closed") {
        obj.style.zIndex = '100';
        obj.classList.toggle('expanded');
        obj.dataset.expandingButton = "expanded";
    } else if (obj.dataset.expandingButton === "expanded") {
        obj.classList.toggle('expanded');
        setTimeout(() => {
            obj.style.zIndex = ''
        }, 500);
        obj.dataset.expandingButton = "closed"
    }
}; 

//Получаем все кнопки и преобразуем в массив
let rotatingBtnsArray = document.querySelectorAll('[data-button-rotating]');
let expandingBtnsArray = document.querySelectorAll('[data-expanding-button]');

//Тоггл по клику
for (const elem of rotatingBtnsArray){
    elem.addEventListener('click', () => {
        return elem.classList.toggle('rotated');
    });
};

for (const elem of expandingBtnsArray){
    elem.dataset.expandingButton = "closed";
    elem.addEventListener('click', () => {
        return expandingBtnClick(elem);
    });
};