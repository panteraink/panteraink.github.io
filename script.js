"use strict";

let expandingBtnSiblingsArray = [];

//Анимация разворачиваемой кнопки
const expandingBtnClick = (obj, sibls) => {
    let bgColor = obj.style.backgroundColor
    if (obj.dataset.expandingButton === "closed") {
        obj.firstElementChild.style.zIndex = '100';
        obj.firstElementChild.classList.toggle('expanded');
        obj.style.backgroundColor = 'transperent';
        setTimeout(() => {
            for (const e of sibls){
                e.style.display = 'none';
            };
        }, 1);
        setTimeout(() => {
            for (const e of sibls){
                e.style.display = 'none';
            };
            obj.style.gridRow = 'span 4';
            obj.style.gridColumn = 'span 4';
        }, 451);
        obj.dataset.expandingButton = "expanded";
    } else if (obj.dataset.expandingButton === "expanded") {
        obj.firstElementChild.classList.toggle('expanded');
        setTimeout(() => {
            obj.style.gridRow = '';
            obj.style.gridColumn = '';
            obj.style.backgroundColor = bgColor;
        }, 50);
        setTimeout(() => {
            for (const e of sibls){
                e.style.display = '';
            };
        }, 450);
        obj.firstElementChild.style.zIndex = '-1';
        obj.dataset.expandingButton = "closed"
    }
}; 

//Получаем всех сиблингов нажатой кнопки
const btnSiblings = (obj) => {
    let a = Array.from(obj.parentElement.children);
    let i = a.indexOf(obj);
    a.splice(i, 1);
    return a;
};

//Получаем все кнопки и преобразуем в массив
let rotatingBtnsArray = Array.from(document.querySelectorAll('[data-button-rotating]'));
let expandingBtnsArray = Array.from(document.querySelectorAll('[data-expanding-button]'));

//Тоггл по клику
for (const elem of rotatingBtnsArray){
    elem.addEventListener('click', () => {
        return elem.classList.toggle('rotated');
    });
};

for (const elem of expandingBtnsArray){
    const elemSibs = btnSiblings(elem);
    elem.dataset.expandingButton = "closed";
    elem.addEventListener('click', () => {
        return expandingBtnClick(elem, elemSibs);
    });
};