import guest from "../js/guest.js"

export function zeng() { // 唯一
    const p = localStorage.getItem('myPeople')
    if (!p) localStorage.setItem('myPeople', "y")
}

export function render() {
    zeng()
    // console.log(`welcome to zeng's christmas tree`);
    const enable = document.getElementById('myPeople')
    enable.classList.toggle('hide')

    const bgAudio = document.getElementById('bgAudio')
    const bgDiv = document.querySelectorAll("#myPeople > div:not(.footer)")

    window.load = () => {
        bgAudio.play()
    }

    function toggleJumping() {
        const toggleDivFast = document.getElementById("jump-fast")
        toggleDivFast.classList.toggle("hide")
    }

    function addEvent() {
        const n = bgDiv.length
        // console.log(bgDiv)
        for (let i = 0; i < n - 1; i++) {
            bgDiv[i].addEventListener('click', () => {
                if (!myAudio.paused) {
                    myAudio.pause()
                    toggleJumping()
                }
                return bgAudio.paused ? bgAudio.play() : bgAudio.pause()
            })
        }
    }

    addEvent()

    const myAudio = document.getElementById("myAudio");

    function togglePlayAudio() {
        toggleJumping()
        if (!bgAudio.paused) {
            bgAudio.pause()
        }
        return myAudio.paused ? myAudio.play() : myAudio.pause()
    }

    const author = document.querySelector('#author')
    if (author) {
        author.addEventListener('click', () => {
            togglePlayAudio()
        })
    }

    const nextPage = document.querySelector('.next')
    nextPage.addEventListener('click', (e) => {
        e.stopPropagation()
        window.location = 'swinging-tree'
    })

    const previousPage = document.querySelector('.previous')
    previousPage.addEventListener('click', (e) => {
        e.stopPropagation()
        window.location = 'z-ball'
    })

    const clearTime = document.querySelector('#clearTime')
    clearTime.addEventListener('click', clearTimeRecord)
}

export function anotherTree(name) {
    if (name === 'spider man'
        || name === 'spiderman') {
        window.location = 'rotating-tree'
    } else if (name === 'iron man'
        || name === 'ironman') {
        window.location = 'swinging-tree'
    } else if (name === '3') {
        window.location = '../3d-tree'
    } else {
        guest()
    }
}

export function clearTimeRecord() {
    window.localStorage.removeItem('setupTime')
    window.localStorage.removeItem('myPeople')
    window.location.reload()
}

export const hours = 0.25; // 3 minutes
// export const hours = 0.05; // test 3 minutes
export const now = new Date().getTime();
export const setupTime = localStorage.getItem('setupTime')
export const p = localStorage.getItem('myPeople')

export const currentTime = now - setupTime
export const lastTime = hours * 60 * 60 * 1000
