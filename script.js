"use strict";

//Получаем внутренний конейнер и вешаем на него листенер
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