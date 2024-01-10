const btnMenu = document.querySelector('.header__menu')
const btnClose = document.querySelector('.main-nav__close')
const nav = document.querySelector('.main-nav')

const toggleMenu = () => nav.classList.toggle('active')

btnMenu.addEventListener('click',toggleMenu)
btnClose.addEventListener('click',toggleMenu)