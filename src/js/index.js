//import '../style/style.css';


//меняем изображение

const images = [
    {
        normal: './img/hall.svg',
        hover: './img/hall2.svg',
    },
    {
        normal: './img/room.svg',
        hover: './img/room2.svg',
    },
    {
        normal: './img/kamin.svg',
        hover: './img/kamin2.svg',
    },
    {
        normal: './img/bedroom.svg',
        hover: './img/bedroom2.svg',
    },
];

const items = document.querySelectorAll('.rooms');

items.forEach((item, index) => {
    const img = item.querySelector('.rooms-img-left, .rooms-img-right');

    item.addEventListener('mouseenter', () => {
        img.src = images[index].hover;
    });

    item.addEventListener('mouseleave', () => {
        img.src = images[index].normal;
    });
});



// форма обратной связи

const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('thankYouMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы (перезагрузку страницы)
    messageDiv.style.display = 'block'; // показываем сообщение
    form.reset(); // сбрасываем форму, если это необходимо
});
