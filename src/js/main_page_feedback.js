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
        const btnSubmit = document.querySelector('#connection__submit')
        const connectionInput = document.querySelector('#connection__input')
        const buttonInfrastructure = document.querySelector('#button_infrastructure')
        // const buttonLink = document.querySelector('#button_link')

        const closeConnection = () => {
            body.classList.remove('popup-fade')
            connectionWrapper.classList.remove('openForm')
            body.classList.remove('no-scroll')
            form.reset()
            header.classList.remove('z0')
            btnShow.classList.remove('z0')
            btnShow.style.display = 'flex'
        }

        const isDisabled = () => {
            btnSubmit.disabled = true
            btnSubmit.style.background = 'grey'
        }

        const notDisabled = () => {
            btnSubmit.disabled = false
            btnSubmit.style.background = '#F45B69'
        }

        const toggleConnection = () => {
            btnShow.classList.toggle('z0')
            header.classList.toggle('z0')
            body.classList.toggle('popup-fade')
            body.classList.toggle('no-scroll')
            connectionWrapper.classList.add('openForm')
            btnShow.style.display = 'none'
            isDisabled()
            connectionInput.addEventListener('input', (e) => {
                if (connectionInput.checkValidity() && e.target.value !== '0' && e.target.value.length > 0) {
                    notDisabled()
                } else {
                    isDisabled()
                }
            })

            if (connectionWrapper.contains(textSuccess)) {
                textSuccess.remove()
                wrapperForm.append(form)
            }
        }

        const clickOutsideMenu = (e) => {
            const clickInsideMenu = connectionWrapper.contains(e.target) || btnShow.contains(e.target) || btnFeedBack.contains(e.target)
            if (!clickInsideMenu) {
                closeConnection()
            }
        }

        btnFeedBack.addEventListener('click', (e) => {
            e.stopPropagation()
            toggleConnection()
        })

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            form.replaceWith(textSuccess)
        })

        btnClose.addEventListener('click', (e) => {
            e.stopPropagation()
            closeConnection()
        })

        btnShow.addEventListener('click', (e) => {
            e.stopPropagation()
            toggleConnection()
        })

        // buttonLink.addEventListener('click', (e) => {
        //     e.stopPropagation()
        //     toggleConnection()
        // })

        // buttonInfrastructure.addEventListener('click', (e) => {
        //     e.stopPropagation()
        //     toggleConnection()
        // })

        document.addEventListener('click', (e) => {
            clickOutsideMenu(e)
        })

        document.addEventListener('touchstart', (e) => {
            clickOutsideMenu(e)
        })
    })
}
