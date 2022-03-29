"use strict";

//Функция инициализации слайдеров
const slidesInit = () =>{
    buttonPrevious.classList.toggle('inactive-button');
    for (const slds of slides) {
        slds.classList.toggle('slide-next');
    };
    slides[0].classList.toggle('slide-active');
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
    } else if (event.target.closest('.outer-wrapper')) {
        for (const obj of buttonsExpanding) {
            obj.classList.remove('expanded');
            setTimeout(() => {
                obj.style.zIndex = ''
            }, 500);
            obj.dataset.expandingButton = "closed"
        }
    }
});