"use strict";

if (window.matchMedia("(any-hover: none)").matches){
    const nameBlock = document.querySelector('.name');
    const nameImage = nameBlock.querySelector('.name_image');
    const imageUp = () => {
        nameImage.classList.toggle('name_image_up');
    };
    nameBlock.addEventListener('click', imageUp);
};

expandingButtonsActivate();

const slidersArray = [
    {containerSelector: '[data-slider-index="1"]',
    buttonsShow: true,
    slidesClass: 'worked__place',
    buttonsClass: '',
    content: [
        `<div class="worked__place__header">
            <div class="worked__place__header__dates">Июнь 2014 - Июль 2021</div>
            <div class="worked__place__header__organization">ООО &#171;Форвард&#187;</div>
        </div>
        <div class="worked__place__details">
            <div class="worked__place__details__position">Оператор допечатной подготовки</div>
            <div class="worked__place__details__duties">
                <span>Должностные обязанности:</span> <ul>
                    <li>Печать на ЦПМ Ricoh C7100X, обслуживание и ремонт ЦПМ, заказ запчастей.</li>
                    <li>Работа на СТР Heidelberg Suprasetter A52.</li>
                    <li>Обслуживание и ремонт проектора, вывод печатных форм.</li>
                    <li>Обслуживание и ремонт проявочного процессора Glunz & Jensen Raptor Pro 85T.</li>
                    <li>Работа на режущем плоттере Graphtec CE6000-40 Plus.</li>
                </ul>
            </div>
        </div>`,
        `<div class="worked__place__header">
            <div class="worked__place__header__dates">Ноябрь 2012 - Май 2014 </div>
            <div class="worked__place__header__organization">ООО &#171;Областная типография &#8470;1&#187;</div>
        </div>
        <div class="worked__place__details">
            <div class="worked__place__details__position">Оператор CTP</div>
            <div class="worked__place__details__duties"><span>Должностные обязанности:</span> Вывод печатных форм, обслуживание СТР Heidelberg и проявочного процессора.</div>
        </div>`,
        `<div class="worked__place__header">
            <div class="worked__place__header__dates">Август 2011 - Март 2012 </div>
            <div class="worked__place__header__organization">УК ГК &#171;Формула развития&#187;</div>
        </div>
        <div class="worked__place__details">
            <div class="worked__place__details__position">Помощник системного администратора</div>
            <div class="worked__place__details__duties"><span>Должностные обязанности:</span> Администрирование почтового сервера, Active Directory, VMware, поддержка пользователей, ремонт ПК, ремонт оргтехники, настройка сетевого оборудования, прокладка СКС.</div>
        </div>`,
        `<div class="worked__place__header">
            <div class="worked__place__header__dates">Июль 2010 - Январь 2011</div>
            <div class="worked__place__header__organization">ЗАО &#171;Сиброн-Телеком&#187;</div>
        </div>
        <div class="worked__place__details">
            <div class="worked__place__details__position">Оператор call центра</div>
            <div class="worked__place__details__duties"><span>Должностные обязанности:</span> Прием и регистрация звонков, помощь пользователям по телефону, консультация клиентов, мониторинг сети, регистрация аварий </div>
        </div>`
    ]},
    {containerSelector: '[data-slider-index="2"]',
    buttonsShow: true,
    content: [
        `<div>Тестовое задание для диджитал агенства Adict</div>
        <div><a href="./adictLanding.html" onclick="event.stopPropagation()"><img src="adictCover.bc3558f3.png" alt="Обложка макета"></a></div>
        <div>
            Адаптивный лендинг, с проверкой форм на стороне клиента
        </div>`,
        `<div>Плагин создающий слайдеры на странице</div>
        <div><a href="https://github.com/panteraink/sliderPlugin" onclick="event.stopPropagation()"><img src="sliderPlugin.png" alt="Слайдер на GitHub"></a></div>
        <div>
            <a href="https://github.com/panteraink/sliderPlugin">Плагин на GitHub</a>
        </div>`,
        `<div>Адаптивный лендинг</div>
        <div><a href="./beautiesLife.html" onclick="event.stopPropagation()"><img src="Cover.jpg" alt="Обложка макета"></a></div>
        <div>
            <a href="https://www.figma.com/file/hlGtAlnTJLrILDlmU8PezY/Website-Landing-Page-for-BeautiesLife-(Community)?node-id=1506%3A315">Макет в Figma</a>
        </div>`
    ]}
]

const readySlider = slidersArray.slice(0).map(plg.sliderCreate)