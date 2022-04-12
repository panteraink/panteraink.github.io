'use strict'

export default expandingButtonsActivate = () => {
    const buttonsExpanding = document.querySelectorAll('.button-expanding');
    const container = document.querySelector('.outer-wrapper');
    const expandingButtonExpand = (o) => {
        o.style.zIndex = '100';
        o.classList.toggle('expanded');
        o.dataset.expandingButton = "expanded";
    };
    const expandingButtonCollapse = (o) => {
        o.classList.toggle('expanded');
        setTimeout(() => {
            o.style.zIndex = ''
        }, 500);
        o.dataset.expandingButton = "closed"
    };
    container?.addEventListener('click', (event) => {
        if (event.target.closest('.button-rotating')) {
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
};