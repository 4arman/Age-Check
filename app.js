const input = document.querySelector('.age-input')
const button = document.querySelector('.btn')
const text = document.querySelector('.text')

let age = 0

button.addEventListener('click', () => {
    if (input.value == '') {
        text.textContent = 'Enter Your Age:'
        text.style = `color: red;`
    }

    else {
    age = input.value
    text.style = `color: #000;`
    input.value = ''
    button.style = `display: none;`
    input.style = `display: none;`
    text.textContent = 'Loading...'

    if (age >= 18) {
        setTimeout(() => {
            text.textContent = 'You Can Enter'
            text.style = 'color: green;'
            setTimeout(() => {
                location.reload()
            }, 2000)
        }, 2000)
    } else {
        setTimeout(() => {
            text.textContent = 'You Don\'t Reach 18'
            text.style = 'color: red;'
            setTimeout(() => {
                window.location.href = 'https://policies.google.com/terms?hl=en-US'
            }, 1500)
        }, 2000)
    }
    }
})
