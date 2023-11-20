"use strict";
if (window.matchMedia("(any-hover: none)").matches) {
    const nameBlock = document.querySelector(".name");
    const nameImage = nameBlock.querySelector(".name_image");
    const imageUp = ()=>{
        nameImage.classList.toggle("name_image_up");
    };
    nameBlock.addEventListener("click", imageUp);
}
expandingButtonsActivate();
const slidersArray = [
    {
        containerSelector: '[data-slider-index="1"]',
        buttonsShow: true,
        slidesClass: "worked__place",
        buttonsClass: "",
        content: [
            `<div class="worked__place__header">
            <div class="worked__place__header__dates">\u{418}\u{44E}\u{43D}\u{44C} 2014 - \u{418}\u{44E}\u{43B}\u{44C} 2021</div>
            <div class="worked__place__header__organization">\u{41E}\u{41E}\u{41E} &#171;\u{424}\u{43E}\u{440}\u{432}\u{430}\u{440}\u{434}&#187;</div>
        </div>
        <div class="worked__place__details">
            <div class="worked__place__details__position">\u{41E}\u{43F}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440} \u{434}\u{43E}\u{43F}\u{435}\u{447}\u{430}\u{442}\u{43D}\u{43E}\u{439} \u{43F}\u{43E}\u{434}\u{433}\u{43E}\u{442}\u{43E}\u{432}\u{43A}\u{438}</div>
            <div class="worked__place__details__duties">
                <span>\u{414}\u{43E}\u{43B}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{43D}\u{44B}\u{435} \u{43E}\u{431}\u{44F}\u{437}\u{430}\u{43D}\u{43D}\u{43E}\u{441}\u{442}\u{438}:</span> <ul>
                    <li>\u{41F}\u{435}\u{447}\u{430}\u{442}\u{44C} \u{43D}\u{430} \u{426}\u{41F}\u{41C} Ricoh C7100X, \u{43E}\u{431}\u{441}\u{43B}\u{443}\u{436}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{438} \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442} \u{426}\u{41F}\u{41C}, \u{437}\u{430}\u{43A}\u{430}\u{437} \u{437}\u{430}\u{43F}\u{447}\u{430}\u{441}\u{442}\u{435}\u{439}.</li>
                    <li>\u{420}\u{430}\u{431}\u{43E}\u{442}\u{430} \u{43D}\u{430} \u{421}\u{422}\u{420} Heidelberg Suprasetter A52.</li>
                    <li>\u{41E}\u{431}\u{441}\u{43B}\u{443}\u{436}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{438} \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442} \u{43F}\u{440}\u{43E}\u{435}\u{43A}\u{442}\u{43E}\u{440}\u{430}, \u{432}\u{44B}\u{432}\u{43E}\u{434} \u{43F}\u{435}\u{447}\u{430}\u{442}\u{43D}\u{44B}\u{445} \u{444}\u{43E}\u{440}\u{43C}.</li>
                    <li>\u{41E}\u{431}\u{441}\u{43B}\u{443}\u{436}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{438} \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442} \u{43F}\u{440}\u{43E}\u{44F}\u{432}\u{43E}\u{447}\u{43D}\u{43E}\u{433}\u{43E} \u{43F}\u{440}\u{43E}\u{446}\u{435}\u{441}\u{441}\u{43E}\u{440}\u{430} Glunz & Jensen Raptor Pro 85T.</li>
                    <li>\u{420}\u{430}\u{431}\u{43E}\u{442}\u{430} \u{43D}\u{430} \u{440}\u{435}\u{436}\u{443}\u{449}\u{435}\u{43C} \u{43F}\u{43B}\u{43E}\u{442}\u{442}\u{435}\u{440}\u{435} Graphtec CE6000-40 Plus.</li>
                </ul>
            </div>
        </div>`,
            `<div class="worked__place__header">
            <div class="worked__place__header__dates">\u{41D}\u{43E}\u{44F}\u{431}\u{440}\u{44C} 2012 - \u{41C}\u{430}\u{439} 2014 </div>
            <div class="worked__place__header__organization">\u{41E}\u{41E}\u{41E} &#171;\u{41E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{43D}\u{430}\u{44F} \u{442}\u{438}\u{43F}\u{43E}\u{433}\u{440}\u{430}\u{444}\u{438}\u{44F} &#8470;1&#187;</div>
        </div>
        <div class="worked__place__details">
            <div class="worked__place__details__position">\u{41E}\u{43F}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440} CTP</div>
            <div class="worked__place__details__duties"><span>\u{414}\u{43E}\u{43B}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{43D}\u{44B}\u{435} \u{43E}\u{431}\u{44F}\u{437}\u{430}\u{43D}\u{43D}\u{43E}\u{441}\u{442}\u{438}:</span> \u{412}\u{44B}\u{432}\u{43E}\u{434} \u{43F}\u{435}\u{447}\u{430}\u{442}\u{43D}\u{44B}\u{445} \u{444}\u{43E}\u{440}\u{43C}, \u{43E}\u{431}\u{441}\u{43B}\u{443}\u{436}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{421}\u{422}\u{420} Heidelberg \u{438} \u{43F}\u{440}\u{43E}\u{44F}\u{432}\u{43E}\u{447}\u{43D}\u{43E}\u{433}\u{43E} \u{43F}\u{440}\u{43E}\u{446}\u{435}\u{441}\u{441}\u{43E}\u{440}\u{430}.</div>
        </div>`,
            `<div class="worked__place__header">
            <div class="worked__place__header__dates">\u{410}\u{432}\u{433}\u{443}\u{441}\u{442} 2011 - \u{41C}\u{430}\u{440}\u{442} 2012 </div>
            <div class="worked__place__header__organization">\u{423}\u{41A} \u{413}\u{41A} &#171;\u{424}\u{43E}\u{440}\u{43C}\u{443}\u{43B}\u{430} \u{440}\u{430}\u{437}\u{432}\u{438}\u{442}\u{438}\u{44F}&#187;</div>
        </div>
        <div class="worked__place__details">
            <div class="worked__place__details__position">\u{41F}\u{43E}\u{43C}\u{43E}\u{449}\u{43D}\u{438}\u{43A} \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{43D}\u{43E}\u{433}\u{43E} \u{430}\u{434}\u{43C}\u{438}\u{43D}\u{438}\u{441}\u{442}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{430}</div>
            <div class="worked__place__details__duties"><span>\u{414}\u{43E}\u{43B}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{43D}\u{44B}\u{435} \u{43E}\u{431}\u{44F}\u{437}\u{430}\u{43D}\u{43D}\u{43E}\u{441}\u{442}\u{438}:</span> \u{410}\u{434}\u{43C}\u{438}\u{43D}\u{438}\u{441}\u{442}\u{440}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{43F}\u{43E}\u{447}\u{442}\u{43E}\u{432}\u{43E}\u{433}\u{43E} \u{441}\u{435}\u{440}\u{432}\u{435}\u{440}\u{430}, Active Directory, VMware, \u{43F}\u{43E}\u{434}\u{434}\u{435}\u{440}\u{436}\u{43A}\u{430} \u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{442}\u{435}\u{43B}\u{435}\u{439}, \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442} \u{41F}\u{41A}, \u{440}\u{435}\u{43C}\u{43E}\u{43D}\u{442} \u{43E}\u{440}\u{433}\u{442}\u{435}\u{445}\u{43D}\u{438}\u{43A}\u{438}, \u{43D}\u{430}\u{441}\u{442}\u{440}\u{43E}\u{439}\u{43A}\u{430} \u{441}\u{435}\u{442}\u{435}\u{432}\u{43E}\u{433}\u{43E} \u{43E}\u{431}\u{43E}\u{440}\u{443}\u{434}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F}, \u{43F}\u{440}\u{43E}\u{43A}\u{43B}\u{430}\u{434}\u{43A}\u{430} \u{421}\u{41A}\u{421}.</div>
        </div>`,
            `<div class="worked__place__header">
            <div class="worked__place__header__dates">\u{418}\u{44E}\u{43B}\u{44C} 2010 - \u{42F}\u{43D}\u{432}\u{430}\u{440}\u{44C} 2011</div>
            <div class="worked__place__header__organization">\u{417}\u{410}\u{41E} &#171;\u{421}\u{438}\u{431}\u{440}\u{43E}\u{43D}-\u{422}\u{435}\u{43B}\u{435}\u{43A}\u{43E}\u{43C}&#187;</div>
        </div>
        <div class="worked__place__details">
            <div class="worked__place__details__position">\u{41E}\u{43F}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440} call \u{446}\u{435}\u{43D}\u{442}\u{440}\u{430}</div>
            <div class="worked__place__details__duties"><span>\u{414}\u{43E}\u{43B}\u{436}\u{43D}\u{43E}\u{441}\u{442}\u{43D}\u{44B}\u{435} \u{43E}\u{431}\u{44F}\u{437}\u{430}\u{43D}\u{43D}\u{43E}\u{441}\u{442}\u{438}:</span> \u{41F}\u{440}\u{438}\u{435}\u{43C} \u{438} \u{440}\u{435}\u{433}\u{438}\u{441}\u{442}\u{440}\u{430}\u{446}\u{438}\u{44F} \u{437}\u{432}\u{43E}\u{43D}\u{43A}\u{43E}\u{432}, \u{43F}\u{43E}\u{43C}\u{43E}\u{449}\u{44C} \u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{442}\u{435}\u{43B}\u{44F}\u{43C} \u{43F}\u{43E} \u{442}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}\u{443}, \u{43A}\u{43E}\u{43D}\u{441}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{446}\u{438}\u{44F} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{43E}\u{432}, \u{43C}\u{43E}\u{43D}\u{438}\u{442}\u{43E}\u{440}\u{438}\u{43D}\u{433} \u{441}\u{435}\u{442}\u{438}, \u{440}\u{435}\u{433}\u{438}\u{441}\u{442}\u{440}\u{430}\u{446}\u{438}\u{44F} \u{430}\u{432}\u{430}\u{440}\u{438}\u{439} </div>
        </div>`
        ]
    },
    {
        containerSelector: '[data-slider-index="2"]',
        buttonsShow: true,
        content: [
            `<div>\u{422}\u{435}\u{441}\u{442}\u{43E}\u{432}\u{43E}\u{435} \u{437}\u{430}\u{434}\u{430}\u{43D}\u{438}\u{435} \u{434}\u{43B}\u{44F} \u{434}\u{438}\u{434}\u{436}\u{438}\u{442}\u{430}\u{43B} \u{430}\u{433}\u{435}\u{43D}\u{441}\u{442}\u{432}\u{430} Adict</div>
        <div><a href="./adictLanding.html" onclick="event.stopPropagation()"><img src="adictCover.bc3558f3.png" alt="\u{41E}\u{431}\u{43B}\u{43E}\u{436}\u{43A}\u{430} \u{43C}\u{430}\u{43A}\u{435}\u{442}\u{430}"></a></div>
        <div>
            \u{410}\u{434}\u{430}\u{43F}\u{442}\u{438}\u{432}\u{43D}\u{44B}\u{439} \u{43B}\u{435}\u{43D}\u{434}\u{438}\u{43D}\u{433}, \u{441} \u{43F}\u{440}\u{43E}\u{432}\u{435}\u{440}\u{43A}\u{43E}\u{439} \u{444}\u{43E}\u{440}\u{43C} \u{43D}\u{430} \u{441}\u{442}\u{43E}\u{440}\u{43E}\u{43D}\u{435} \u{43A}\u{43B}\u{438}\u{435}\u{43D}\u{442}\u{430}
        </div>`,
            `<div>\u{41F}\u{43B}\u{430}\u{433}\u{438}\u{43D} \u{441}\u{43E}\u{437}\u{434}\u{430}\u{44E}\u{449}\u{438}\u{439} \u{441}\u{43B}\u{430}\u{439}\u{434}\u{435}\u{440}\u{44B} \u{43D}\u{430} \u{441}\u{442}\u{440}\u{430}\u{43D}\u{438}\u{446}\u{435}</div>
        <div><a href="https://github.com/panteraink/sliderPlugin" onclick="event.stopPropagation()"><img src="sliderPlugin.png" alt="\u{421}\u{43B}\u{430}\u{439}\u{434}\u{435}\u{440} \u{43D}\u{430} GitHub"></a></div>
        <div>
            <a href="https://github.com/panteraink/sliderPlugin">\u{41F}\u{43B}\u{430}\u{433}\u{438}\u{43D} \u{43D}\u{430} GitHub</a>
        </div>`,
            `<div>\u{410}\u{434}\u{430}\u{43F}\u{442}\u{438}\u{432}\u{43D}\u{44B}\u{439} \u{43B}\u{435}\u{43D}\u{434}\u{438}\u{43D}\u{433}</div>
        <div><a href="./beautiesLife.html" onclick="event.stopPropagation()"><img src="Cover.jpg" alt="\u{41E}\u{431}\u{43B}\u{43E}\u{436}\u{43A}\u{430} \u{43C}\u{430}\u{43A}\u{435}\u{442}\u{430}"></a></div>
        <div>
            <a href="https://www.figma.com/file/hlGtAlnTJLrILDlmU8PezY/Website-Landing-Page-for-BeautiesLife-(Community)?node-id=1506%3A315">\u{41C}\u{430}\u{43A}\u{435}\u{442} \u{432} Figma</a>
        </div>`
        ]
    }
];
const readySlider = slidersArray.slice(0).map(plg.sliderCreate);

//# sourceMappingURL=index.afe52b36.js.map
