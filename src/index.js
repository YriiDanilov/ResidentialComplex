
document.addEventListener('DOMContentLoaded', () => {

    const btnShow = document.querySelector('#btn-show');
    const wrapperConnection = document.querySelector('#wrapper-connection');
    const btnClose = document.querySelector('#btn-close');
    const form = document.querySelector('#form');


    btnShow.addEventListener('click', (e) => {
        e.preventDefault();
        wrapperConnection.classList.toggle('open')
    })

    const textSuccess = document.createElement('p')
    textSuccess.textContent = 'Спасибо! Наши менеджеры свяжутся с вами в ближайшее время'
    textSuccess.style.color = '#114B5F';
    textSuccess.style.width = '400px';
    textSuccess.style.lineHeight = '30px';
    textSuccess.style.textAlign = 'left';
    textSuccess.style.margin = '50px';


    
    form.addEventListener('submit' , (e) => {
        e.preventDefault();
        form.replaceWith(textSuccess)

    })
    
    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        wrapperConnection.classList.remove('open');
    })
})