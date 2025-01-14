import onChange from '../../node_modules/on-change/index.js'

export const interior_fallMenu = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const state = {
            mode: 'close',
        }

<<<<<<< HEAD
        window.addEventListener('load', function () {
            window.scrollTo(0, 0)
        })


        const watchedState = onChange(state, () => {
=======
        const watchedState = onChange(state, (path, current, previous) => {
>>>>>>> develop
            const popup = document.querySelector('#popup')
            const popupFade = document.querySelector('#popup-fade')
            const body = document.body
            const imageContainer = document.getElementById('imageContainer')

            if (state.mode === 'open') {
                popup.classList.toggle('open')
<<<<<<< HEAD
                body.classList.add('no-scroll')
                popupFade.classList.toggle('popup-fade')
                imageContainer.classList.add('show')
                
=======
                body.classList.toggle('no-scroll')
                popupFade.classList.toggle('popup-fade')
                imageContainer.classList.add('show')
>>>>>>> develop
            } else {
                popup.classList.remove('open')
                body.classList.remove('no-scroll')
                popupFade.classList.remove('popup-fade')
<<<<<<< HEAD
                imageContainer.classList.remove('show')
                
=======
>>>>>>> develop
            }
        })

        const menuCloseButton = document.querySelector('.menu-close')
        const menuBtn = document.querySelector('#menu_btn')

<<<<<<< HEAD

=======
>>>>>>> develop
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
<<<<<<< HEAD

=======
>>>>>>> develop
        })

        document.addEventListener('click', (event) => {
            const isClickInsideMenu = popup.contains(event.target) || menuBtn.contains(event.target)

            if (!isClickInsideMenu) {
                watchedState.mode = 'close'
<<<<<<< HEAD

=======
>>>>>>> develop
            }
        })
    })
}
<<<<<<< HEAD

=======
>>>>>>> develop
