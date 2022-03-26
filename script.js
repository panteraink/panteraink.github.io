"use strict";

//Функция инициализации слайдеров
const slidesInit = () =>{
    for (const btn of buttonPrevious) {
        btn.classList.toggle('inactive-button');
    };
    for (const slds of slides) {
        slds.classList.toggle('slide-next');
    };
    slides[0].classList.toggle('slide-active');
};
const slideNext = () => {
    slides[slideNumber].classList.toggle('slide-previous');
    slides[slideNumber + 1].classList.toggle('slide-previous');
    ++slideNumber;
    if (!slides[slideNumber + 1]){
        buttonNext.classList.toggle('inactive-button');
    }
};
const slidePrevious = () => {};

const sliders = document.querySelectorAll('.slider');
const slides = document.querySelectorAll('.slide');
const buttonNext = document.querySelectorAll('.slider-button-next');
const buttonPrevious = document.querySelectorAll('.slider-button-previous');

//Иницализация кнопок слайдера
let slideNumber = 0;
slidesInit();

//Вешаем listener на внутренний контейнер
let container = document.querySelector('.inner-wrapper');
container.addEventListener('click', (event) => {
    if (event.target.closest('.button-rotating')) {
        event.target.closest('.button-rotating').classList.toggle('rotated');
    } else if (event.target.closest('.button-expanding')) {
        const obj = event.target.closest('.button-expanding');
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
    }
});

/*
+ slides-init
    + button previous inactive
    + for each slides class = slide-next
    + slides[0] class .slide-active
slide-next
    slides[n] classlist slide-previous
    slides[n+1] classlist slide-active
    n =+ n;
    if slides[n+1] === null {
        button next deactivate
    };
slide-before
    slide[n] classlist slide-next
    slide[n-1] classlist slide-active
    n =- n;
    if slides[n-1] === null {
        button previous deactivate
    };
*/