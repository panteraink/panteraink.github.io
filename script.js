"use strict";

//Функция инициализации слайдеров
const slidesInit = () =>{
    buttonPrevious.classList.toggle('inactive-button');
    for (const i of slides) {
        i.classList.toggle('slide-next');
    };
    slides[0].classList.toggle('slide-active');
    for (const i of sliders) {
        i.dataset.slideNumber = 0; 
    }
};
//Функция следующий слайд
const slideNext = () => {
    slides[slideNumber].classList.toggle('slide-active');
    slides[slideNumber].classList.add('slide-previous');
    slides[slideNumber].classList.remove('slide-next');
    slides[slideNumber + 1].classList.toggle('slide-active');
    buttonPrevious.classList.remove('inactive-button');
    ++slideNumber;
    if (slides[slideNumber + 1]){
        buttonNext.classList.remove('inactive-button');
    } else if (!slides[slideNumber + 1]) {
        buttonNext.classList.add('inactive-button');
    };
};
//Функция предыдущий слайд
const slidePrevious = () => {
    slides[slideNumber].classList.toggle('slide-active');
    slides[slideNumber].classList.add('slide-next');
    slides[slideNumber].classList.remove('slide-previous');
    slides[slideNumber - 1].classList.toggle('slide-active');
    buttonNext.classList.remove('inactive-button');
    --slideNumber;
    if (slides[slideNumber - 1]){
        buttonPrevious.classList.remove('inactive-button');
    } else if (!slides[slideNumber - 1]) {
        buttonPrevious.classList.add('inactive-button');
    };
};
//Функция развертывания
const expandingButtonExpand = (o) => {
    o.style.zIndex = '100';
    o.classList.toggle('expanded');
    o.dataset.expandingButton = "expanded";
};
//Функция свертывания
const expandingButtonCollapse = (o) => {
    o.classList.toggle('expanded');
    setTimeout(() => {
        o.style.zIndex = ''
    }, 500);
    o.dataset.expandingButton = "closed"
};
const sliders = document.querySelectorAll('.slider');
const slides = document.querySelectorAll('.slide');
const buttonNext = document.querySelector('.slider-button-next');
const buttonPrevious = document.querySelector('.slider-button-previous');
const buttonsExpanding = document.querySelectorAll('.button-expanding');

//Иницализация кнопок слайдера
let slideNumber = 0;
slidesInit();

//Вешаем listener на внутренний контейнер
const container = document.querySelector('.outer-wrapper');
container.addEventListener('click', (event) => {
    if (event.target.closest('.slider-button-next')) {
        slideNext()
    } else if (event.target.closest('.slider-button-previous')) {
        slidePrevious()
    } else if (event.target.closest('.button-rotating')) {
        event.target.closest('.button-rotating').classList.toggle('rotated');
    } else if (event.target.closest('.button-expanding')) {
        const obj = event.target.closest('.button-expanding');
        if (obj.dataset.expandingButton === "closed") {
            expandingButtonExpand(obj);
        } else if (obj.dataset.expandingButton === "expanded") {
            expandingButtonCollapse(obj);
        }
    } else if (event.target.closest('.outer-wrapper')) {
        for (const obj of buttonsExpanding) {
            if (obj.dataset.expandingButton === "expanded") {
                expandingButtonCollapse(obj);
            }
        }
    }
});