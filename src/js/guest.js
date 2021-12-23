function guest() {
    const myPeople = document.querySelector('#myPeople')
    const people1 = document.querySelector('#people1')
    if (myPeople) {
        myPeople.innerHTML = ''
        people1.innerHTML = ''
    }
    const n = document.createElement('div')
    n.innerHTML = `<p id="clickMe">CLICK ME TO SEE YOUR GIFT</p>`
    document.body.appendChild(n)
    n.classList.add('enBox')
    const p = document.querySelector('#clickMe')
    p.addEventListener('click', (e) => {
        e.stopPropagation()
        window.location.replace(window.location.href)
        // console.log('点击了')
    })
}

export default guest
