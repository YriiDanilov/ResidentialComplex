export const feedback = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const btnShow = document.querySelector('#connection__btn-phone')
        const connectionWrapper = document.querySelector('#connection__wrapper-content')
        const btnClose = document.querySelector('#btn-close')
        const wrapperForm = document.querySelector('#wrapper-form')
        const form = document.querySelector('#connection__form')
        const textSuccess = document.querySelector('#connection__feedback')
        const body = document.body
        const header = document.querySelector('.header')
        let scrollPosition = 0 

        const closeConnection = () => {
            body.classList.remove('popup-fade')
            connectionWrapper.classList.remove('openForm')
            body.classList.remove('no-scroll')
            form.reset()
            header.classList.remove('z0')
            window.scrollTo(0, scrollPosition)
            btnShow.classList.remove('z0')
        }


        btnShow.addEventListener('click', () => {
            scrollPosition = window.scrollY 
            btnShow.classList.toggle('z0')
            header.classList.toggle('z0')
            body.classList.toggle('popup-fade')
            body.classList.toggle('no-scroll')
            connectionWrapper.classList.add('openForm')

            if (connectionWrapper.contains(textSuccess)) {
                textSuccess.remove()
                wrapperForm.append(form)
            }
        })

        form.addEventListener('submit', (e) => {
    
            e.preventDefault()
            header.classList.toggle('z0')
            form.replaceWith(textSuccess)
            body.classList.toggle('no-scroll')
            header.classList.toggle('z0')
            window.scrollTo(0, scrollPosition)
            btnShow.classList.toggle('z0')
        })

        btnClose.addEventListener('click', () => {
            closeConnection()
        })

        document.addEventListener('click', (e) => {
            const clickInsideMenu = connectionWrapper.contains(e.target) || btnShow.contains(e.target)
            if (!clickInsideMenu) {
                closeConnection()
            }
        })

        
    })
}
