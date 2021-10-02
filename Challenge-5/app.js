const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('date-time'))
        screens[1].classList.add('up')
        startGame()
    }
})
board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRamndomCircle()
    }
})

function startGame() {
    setInterval(decraseTime, 1000)
    createRamndomCircle()
    setTime(time)
}

function decraseTime() {
    if (time === 0) {
        finishGame()
    }else {
        let current = --time
        if (current<10) {
            current = `0${current}`
        }
        setTime(current)
    }
    
}
function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function createRamndomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    circle.classList.add('circle')
    const {width, height} = board.getBoundingClientRect()

    const x = getRandomNumber(0, width- size)
    const y = getRandomNumber(0, height- size)

    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    board.append(circle)
}

function getRandomNumber(min,max) {
    return Math.round(Math.random() * (max-min)+min)
}