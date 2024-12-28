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
        const btnFeedBack = document.querySelector('#btn-feedback')
        let scrollPosition = 0

        const closeConnection = () => {
            body.classList.remove('popup-fade')
            connectionWrapper.classList.remove('openForm')
            body.classList.remove('no-scroll')
            form.reset()
            header.classList.remove('z0')
            btnShow.classList.remove('z0')
            body.style.position = ''
            body.style.top = ''
            window.scrollTo(0, scrollPosition)
        }

        const safePosition = () =>{
            scrollPosition = window.scrollY
            body.style.top = `-${scrollPosition}px`
            body.style.position = 'fixed'
        }


        btnShow.addEventListener('click', () => {
            safePosition()
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
            form.replaceWith(textSuccess)
        })

        btnClose.addEventListener('click', () => {
            closeConnection()
        })

        btnFeedBack.addEventListener('click', () => {
            safePosition()

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
    })

    document.addEventListener('click', (e) => {
        const clickInsideMenu = connectionWrapper.contains(e.target) || btnShow.contains(e.target)
        if (!clickInsideMenu) {
            closeConnection()
        }
    })
}
