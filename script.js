"use strict";

import './js/slider';
import './js/expandingBtns'

if (window.matchMedia("(any-hover: none)").matches){
    const nameBlock = document.querySelector('.name');
    const nameImage = nameBlock.querySelector('.name_image');
    const imageUp = () => {
        nameImage.classList.toggle('name_image_up');
    };
    nameBlock.addEventListener('click', imageUp);
};

expandingButtonsActivate();
slidersActivate();