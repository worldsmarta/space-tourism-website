const data = [
    {
        name: 'Moon',
        images: {
            png: './assets/destination/image-moon.png',
            webp: './assets/destination/image-moon.webp'
        },
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days'
    },
    {
        name: 'Mars',
        images: {
            png: './assets/destination/image-mars.png',
            webp: './assets/destination/image-mars.webp'
        },
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travel: '9 months'
    },
    {
        name: 'Europa',
        images: {
            png: './assets/destination/image-europa.png',
            webp: './assets/destination/image-europa.webp'
        },
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        travel: '3 years'
    },
    {
        name: 'Titan',
        images: {
            png: './assets/destination/image-titan.png',
            webp: './assets/destination/image-titan.webp'
        },
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking vou get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travel: '7 years'
    }
]
const moon = document.getElementById('moon')
const mars = document.getElementById('mars')
const europa = document.getElementById('europa')
const titan = document.getElementById('titan')

const planet = document.getElementById('name')
const para = document.getElementById('para')
const dist = document.getElementById('dist')
const time = document.getElementById('time')
const image = document.getElementById('image')

moon.addEventListener('click', () => {
    planet.innerText = data[0].name
    para.innerText = data[0].description
    dist.innerText = data[0].distance
    time.innerText = data[0].travel
    image.setAttribute('src', data[0].images.png)
    moon.style.borderBottom = '2px solid white'
    mars.style.borderBottom = 'none'
    europa.style.borderBottom = 'none'
    titan.style.borderBottom = 'none'


})

mars.addEventListener('click', () => {
    planet.innerText = data[1].name
    para.innerText = data[1].description
    dist.innerText = data[1].distance
    time.innerText = data[1].travel
    image.setAttribute('src', data[1].images.png)
    mars.style.borderBottom = '2px solid white'
    moon.style.borderBottom = 'none'
    europa.style.borderBottom = 'none'
    titan.style.borderBottom = 'none'

})

europa.addEventListener('click', () => {
    planet.innerText = data[2].name
    para.innerText = data[2].description
    dist.innerText = data[2].distance
    time.innerText = data[2].travel
    image.setAttribute('src', data[2].images.png)
    europa.style.borderBottom = '2px solid white'
    moon.style.borderBottom = 'none'
    mars.style.borderBottom = 'none'
    titan.style.borderBottom = 'none'
})

titan.addEventListener('click', () => {
    planet.innerText = data[3].name
    para.innerText = data[3].description
    dist.innerText = data[3].distance
    time.innerText = data[3].travel
    image.setAttribute('src', data[3].images.png)
    titan.style.borderBottom = '2px solid white'
    moon.style.borderBottom = 'none'
    mars.style.borderBottom = 'none'
    europa.style.borderBottom = 'none'
})