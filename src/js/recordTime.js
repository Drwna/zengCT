import verify from "./verify.js"
import {
    anotherTree,
    render,
    currentTime,
    lastTime,
    now,
    setupTime,
    p
} from "./render.js"
import guest from "../js/guest.js"

function recordTime() {
    // const hours = 0.25; // 15 minutes
    // const hours = 0.05; // 3 minutes
    // const now = new Date().getTime();
    // const setupTime = localStorage.getItem('setupTime')
    //
    // const currentTime = now - setupTime
    // const lastTime = hours * 60 * 60 * 1000
    function removeStorage() {
        localStorage.removeItem('setupTime')
        localStorage.removeItem('myPeople')
    }

    if (setupTime) {
        // 未过期
        if (currentTime < lastTime) {
            render()
            return 'myPeople'
        } else {// 过期重新验证
            const a = verify()
            if (!a) {
                removeStorage()
            } else if (a === 'myPeople') {
                render()
                removeStorage()
                localStorage.setItem('myPeople', 'y')
                localStorage.setItem('setupTime', `${now}`)
            } else if (a === a) {
                anotherTree(a)
            } else {
                removeStorage()
                guest()
            }
        }
    } else if (p) {
        localStorage.setItem('setupTime', `${now}`)
        render()
        return 'myPeople'
    } else { // 清除时间 或 新来的
        const v = verify()
        if (v === 'myPeople') {
            render()
            localStorage.setItem('setupTime', `${now}`)
            localStorage.setItem('myPeople', `y`)
        } else if (v === v) {
            anotherTree(v)
        } else {
            guest()
        }
    }
}

export default recordTime
