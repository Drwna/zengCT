//----------------------www.maureenhaddadi.com--------------//

$(function () {

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const limit_flake = 50
    setInterval(function () {
        let dimension = randomInt(3, 9) + "px";
        const flake = "<div class='drop animate' style='left:"
            + randomInt(10, window.innerWidth - 20)
            + "px;width:" + dimension + ";height:" + dimension + "'></div>"
        $('body').append(flake);

        const list_flake = $('.drop')
        if (list_flake.length > limit_flake) list_flake[list_flake.length - 1].remove();
    }, 200);
})
