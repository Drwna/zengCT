import tempAlert from "./tempAlert.js"

function verify() {
    let name = window.prompt('who am i ?')
    if (name === null) {
        return false
    }
    name = name.trim().toLowerCase()
    switch (name) {
        case '龙':
        case '哥哥':
        case '我的头像真好看':
            return 'myPeople'
        case 'spider man':
        case 'spiderman':
        case 'ironman':
        case 'iron man':
        case '3':
            return name
        default:
            tempAlert('oops! this is for Miss Zeng, not for you!', 3000)
            return false
    }
}

export default verify
