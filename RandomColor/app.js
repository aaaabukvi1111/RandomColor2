function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
    }
    function randomColor() {
        let r = prompt('Введи R:')
        let g = prompt('Введи G:')
        let b = prompt('Введи B:')
        document.body.style.background = `rgb(${r}, ${g}, ${b})`
    }