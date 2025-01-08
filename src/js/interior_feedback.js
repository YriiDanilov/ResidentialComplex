export const interior_feedback = () => {
    document.addEventListener('DOMContentLoaded', () => {

        const btnShow = document.querySelector('#btn-feedback');
        const wrapperConnection = document.querySelector('#wrapper-connection');
        const btnClose = document.querySelector('#btn-close');
        const form = document.querySelector('#form');
        const wrapperForm = document.querySelector('#wrapper-form');
        const textSuccess = document.querySelector('#connection__feedback')

        const closeForm = () => {
            wrapperConnection.classList.remove('open_form');
            form.reset();
        }

        btnShow.addEventListener('click', (e) => {
            e.preventDefault();
            wrapperConnection.classList.toggle('open_form');
            if (wrapperConnection.contains(textSuccess)) {
                textSuccess.remove();
                wrapperForm.append(form);
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.replaceWith(textSuccess);
        });

        btnClose.addEventListener('click', (e) => {
            closeForm();
        });


        document.addEventListener('click', (e) => {

            const clickInsideForm = wrapperConnection.contains(e.target) || btnShow.contains(e.target);
            if (!clickInsideForm) {
                closeForm();
            }
        });
    });
}