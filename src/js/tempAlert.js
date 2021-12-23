function tempAlert(msg, duration) {
    const el = document.createElement("div")
    el.classList.add('tempAlert')
    el.innerHTML = `<p>${msg}</p>`
    setTimeout(function () {
        el.parentNode.removeChild(el)
    }, duration)
    document.body.appendChild(el)
}

export default tempAlert
