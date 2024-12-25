export const feedback = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const btnShow = document.querySelector('#connection__btn-phone')
        const wrapperConnection = document.querySelector('#connection__wrapper-content')
        const btnClose = document.querySelector('#btn-close')
        const form = document.querySelector('#phone')
        const wrapperForm = document.querySelector('#wrapper-form')
        const textSuccess = document.querySelector('.feedback__text')


        btnShow.addEventListener('click', () => {
            
            
            wrapperConnection.classList.toggle('openForm')
            if (wrapperConnection.contains(textSuccess)) {
                textSuccess.remove()
                wrapperForm.append(form)
            }
        })

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            form.replaceWith(textSuccess)
        })

        btnClose.addEventListener('click', (e) => {
            wrapperConnection.classList.remove('open')
            form.reset()
        })
    })
}


        // const textSuccess = document.createElement('p')
        // textSuccess.textContent = 'Спасибо! Наши менеджеры свяжутся с вами в ближайшее время'
        // textSuccess.style.color = '#114B5F'
        // textSuccess.style.lineHeight = '30px'
        // textSuccess.style.textAlign = 'center'
        // textSuccess.style.margin = '50px'
        // textSuccess.style.fontSize = '20px'
        // textSuccess.style.fontFamily = 'Saira, sans-serif'