"use strict";

import {slidersActivate} from './js/slider.js'
import {expandingButtonsActivate} from './js/expandingBtns.js'

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