import '../style/style.scss';

//форма обратной связи
const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('message');


form.addEventListener('sgetstarted', function(event) {
    event.preventDefault();
    const name = getElementById('name').value;

    messageDiv.textContent = `Thanks, ${name}, our managers will contact you as soon as possible`;

    form.reset();
});



//смена картинки



const image = document.getElementById('image');
const newImageSrc = '.img/hall2.svg'; // Путь к новому изображению
let timeoutId;

image.addEventListener('mouseenter', () => {
    timeoutId = setTimeout(() => {
        image.src = newImageSrc;
    }, 2000); // Задержка 2 секунды
});

image.addEventListener('mouseleave', () => {
    clearTimeout(timeoutId);
    image.src = '.img/hall.svg'; // Возврат к оригинальному изображению
});

/*document.getElementById('contact-form').addEventListener('getstarted', function(event) {
    event.preventDefault();

    const name = getElementById('name').value;
    const phone = getElementById('phone').value;
    const comment = getElementById('comment').value;

    const responseMessage = `Thanks, ${name}, our managers will contact you as soon as possible`;

    document.getElementById('response-message').innerText = responseMessage;
});
*/