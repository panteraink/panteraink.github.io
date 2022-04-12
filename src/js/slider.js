'use strict'

export const slidersActivate = () => {
    const sliders = document.querySelectorAll('.slider');
    for (const slider of sliders) {
        const slides = slider.querySelectorAll('.slide');
        const buttonNext = slider.querySelector('.slider-button-next');
        const buttonPrevious = slider.querySelector('.slider-button-previous');
        
        if (slides <= 1) {
            //Напиши что делать если один слайд, если слайдов нет, то нахуй continue    
        }
        for (const i of slides) {
            i.classList.add('slide-next');
        };
        slides[0]?.classList.remove('slide-next');
        slides[0]?.classList.add('slide-active');
        buttonPrevious?.classList.toggle('inactive-button');
        let slideNumber = 0;

        const slideNext = (e) => {
            e.stopPropagation()
            slides[slideNumber].classList.toggle('slide-active');
            slides[slideNumber].classList.add('slide-previous');
            slides[slideNumber + 1].classList.remove('slide-next');
            slides[slideNumber + 1].classList.toggle('slide-active');
            buttonPrevious.classList.remove('inactive-button');
            ++slideNumber;
            if (slides[slideNumber + 1]){
                buttonNext.classList.remove('inactive-button');
            } else if (!slides[slideNumber + 1]) {
                buttonNext.classList.add('inactive-button');
            };
        };
        const slidePrevious = (e) => {
            e.stopPropagation()
            slides[slideNumber].classList.toggle('slide-active');
            slides[slideNumber].classList.add('slide-next');
            slides[slideNumber - 1].classList.remove('slide-previous');
            slides[slideNumber - 1].classList.toggle('slide-active');
            buttonNext.classList.remove('inactive-button');
            --slideNumber;
            if (slides[slideNumber - 1]){
                buttonPrevious.classList.remove('inactive-button');
            } else if (!slides[slideNumber - 1]) {
                buttonPrevious.classList.add('inactive-button');
            };
        };
        buttonNext.addEventListener('click', slideNext);
        buttonPrevious.addEventListener('click', slidePrevious);
    }
   
};