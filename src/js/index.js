import '../style/style.scss';


const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('message');


form.addEventListener('sgetstarted', function(event) {
    event.preventDefault();
    const name = getElementById('name').value;

    messageDiv.textContent = `Thanks, ${name}, our managers will contact you as soon as possible`;

    form.reset();
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