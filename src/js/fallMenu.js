import onChange from '../../node_modules/on-change/index.js'

export const fallMenu = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const state = {
            mode: 'close',
        }

        const watchedState = onChange(state, () => {
            const popup = document.querySelector('#popup')
            const popupFade = document.querySelector('#popup-fade')
            const body = document.body
            const imageContainer = document.getElementById('imageContainer')

            if (state.mode === 'open') {
                popup.classList.toggle('open')
                body.classList.toggle('no-scroll')
                popupFade.classList.toggle('popup-fade')
                imageContainer.classList.add('show')
            } else {
                popup.classList.remove('open')
                body.classList.remove('no-scroll')
                popupFade.classList.remove('popup-fade')
                imageContainer.classList.remove('show')
            }
        })

        const menuCloseButton = document.querySelector('.menu-close')
        const menuBtn = document.querySelector('#menu_btn')
        // const menu = document.querySelector('#menu')

        menuBtn.addEventListener('click', () => {
            watchedState.mode = 'open'
        })

        const links = Array.from(menu.children)

        links.forEach((link) => {
            link.addEventListener('click', () => {
                watchedState.mode = 'close'
            })
        })

        menuCloseButton.addEventListener('click', () => {
            watchedState.mode = 'close'
        })

        document.addEventListener('click', (event) => {
            const isClickInsideMenu = popup.contains(event.target) || menuBtn.contains(event.target)

            if (!isClickInsideMenu) {
                watchedState.mode = 'close'
            }
        })
    })
}
