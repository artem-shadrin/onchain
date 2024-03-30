import './scss/index.scss';


document.addEventListener('DOMContentLoaded', () => {

    const burgerBtnEl = document.getElementById('burger-button')
    const burgerMenuEl = document.getElementById('burger-menu')
    burgerBtnEl.addEventListener('click', () => {
        burgerBtnEl.classList.toggle('active')
        burgerMenuEl.classList.toggle('active')
        document.body.classList.toggle('lock')
    })
})