const btn = document.querySelector('button')
const img = document.querySelector('img')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const URL = 'https://dog.ceo/api/breeds/image/random'


// btn.addEventListener('click', () => {
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => img.setAttribute('src', data.message))
//     .catch(err => console.error(err))
// })

// ASYNC & AWAIT

const checkAge = age => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve()
        } else {
            reject()
        }
    })
}

const doubleCheck = () => {
    return new Promise(resolve => {
        console.log('Sprawdzam jeszcze raz...');
        setTimeout(() => {
            resolve('Faktycznie, wiek się zgadza')
        }, 1000)
    })
}

async function test() {
    try {
        await checkAge(20)
        console.log('Chyba możesz wejść.');
        await doubleCheck()
        console.log('Faktycznie, wiek się zgadza');
        console.log('Weryfikacja zakończona!');
    } catch {
        console.error('Błąd, masz za mało lat.');
    }
}

test()

// AXIOS

fetch(URL)
    .then(res => res.json())
    .then(res => one.setAttribute('src', res.message))


axios.get(URL).then(res => two.setAttribute('src', res.data.message))

async function showImage() {
    const response = await axios.get(URL)
    three.setAttribute('src', response.data.message)
}
showImage()




