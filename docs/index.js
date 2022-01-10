const m1 = document.getElementById('menu1')
m1.addEventListener('click', () => {
    m1.style.borderBottom = '2px solid white'
    m2.style.borderBottom = 'none'
    m3.style.borderBottom = 'none'
    m4.style.borderBottom = 'none'
})



const m2 = document.getElementById('menu2')
m2.addEventListener('click', () => {
    m2.style.borderBottom = '2px solid white'
    m1.style.borderBottom = 'none'
    m3.style.borderBottom = 'none'
    m4.style.borderBottom = 'none'
})

const m3 = document.getElementById('menu3')
m3.addEventListener('click', () => {
    m3.style.borderBottom = '2px solid white'
    m1.style.borderBottom = 'none'
    m2.style.borderBottom = 'none'
    m4.style.borderBottom = 'none'
})

const m4 = document.getElementById('menu4')
m4.addEventListener('click', () => {
    m4.style.borderBottom = '2px solid white'
    m1.style.borderBottom = 'none'
    m2.style.borderBottom = 'none'
    m3.style.borderBottom = 'none'
})

const open = document.getElementById('open')
const nav = document.getElementById('nav')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    nav.classList.toggle('active')
    open.classList.toggle('active')
})

close.addEventListener('click', () => {
    nav.classList.remove('active')
    open.classList.remove('active')
})