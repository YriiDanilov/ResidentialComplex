export const feedback = () => {

    document.addEventListener('DOMContentLoaded', () => {
    
        const btnShow = document.querySelector('#btn-show');
        const wrapperConnection = document.querySelector('#wrapper-connection');
        const btnClose = document.querySelector('#btn-close');
        const form = document.querySelector('#form')
        const message = document.querySelector('#message');
        const input = document.querySelector('#input')
        let isFormActive = true;
   
   
        btnShow.addEventListener('click', (e) => {
           e.preventDefault();
           wrapperConnection.classList.toggle('openForm')
       })
   
       form.addEventListener('submit' , (e) => {
           e.preventDefault();
           form.style.display = 'none';
           message.style.display = 'block';
           input.value = '';
           isFormActive = false;
       })
       
        btnClose.addEventListener('click', (e) => {
           e.preventDefault();
           wrapperConnection.classList.remove('openForm');
           form.style.display = 'block';
           message.style.display = 'none';
           input.value = '';
           isFormActive = false;
       })
   })
}




