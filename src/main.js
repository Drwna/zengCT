const greeting = [
    '万事顺意，平平安安',
    '愿你所遇之人皆为良善, 愿你所到之处皆为热土',
    '祝你不用颠沛流离，也能遇到陪伴',
    '祝你不用熬过黑夜，已经等到晚安',
    '愿你一生温暖纯良，不舍爱与自由',
    '愿有人与你共黄昏，有人问你粥可温',
    '人间蠢蛋 蠢到可爱',
    '双子座的家伙 流星划过天际，许你开开心心',
    '愿你此生多福无病灾',
    '愿你南北虽隔不离散',
    '愿你郎君如意长相欢',
    '哈哈哈哈',
    '有朋友同行是一种安慰',
    '有朋友鼓励是一种力量',
    '有朋友帮助是一种温暧',
    '无论生活是苦是甜，让快乐永远！',
    '无论生命是长是短，让真诚永远！',
    '无论缘分是深是浅，让祝福永远！',
];

// const year = new Date().getFullYear() + 1;
// const str = ["Merry Christmas!", "Happy New Year!", "Hello " + year + "!"];

if (!String.prototype.format) {
    String.prototype.format = function () {
        const args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

function transform(element, value) {
    element.style.WebkitTransform = value;
    element.style.MozTransform = value;
    element.style.msTransform = value;
    element.style.OTransform = value;
    element.style.transform = value;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function createBranch(width, height) {
    const div = document.createElement('div');
    const span = document.createElement('span');

    const s = greeting[getRandom(0, greeting.length - 1)];

    const text = document.createTextNode(s);

    div.setAttribute("id", "branch");
    div.setAttribute("class", "christmas");
    span.setAttribute("id", "text");

    span.appendChild(text);
    div.appendChild(span);

    div.style.width = width + 'px';
    div.style.height = height + 'px';
    const green = 50 + Math.ceil(Math.random() * 200);
    const other = Math.ceil(Math.random() * 50);
    //console.log("rgba("+other+","+green+","+other+", 1)");
    div.style.backgroundColor = "rgba(" + other + "," + green + "," + other + ", 1)";
    //div.style.position = "relative";
    return div;
}

function createTrunk(width, height) {
    const div = document.createElement('div');

    div.setAttribute("id", "branch");

    div.style.width = width + 'px';
    div.style.height = height + 'px';
    //console.log("rgba("+other+","+green+","+other+", 1)");
    div.style.backgroundColor = "rgb(160,82,45)";

    //div.style.position = "relative";
    return div;
}

const width = 600;
const height = 700;
const tree = document.getElementById("tree");
tree.style.width = width + 'px';
tree.style.height = height + 'px';
//tree.style.margin = "auto";
//tree.style.background = "#fefefe";

for (let i = 0; i < 300; i++) {
    const top_margin = 70;
    const x = width / 2;
    const y = Math.round(Math.random() * height) + top_margin;
    const rx = 0;
    const ry = Math.random() * 360;
    const rz = 0;//-Math.random() * 15;
    const elementWidth = 15 + (((y - top_margin) / height) * width / 1.8);
    const elementHeight = 26;

    //console.log(x, y, rx, ry, rz, elementWidth,  elementHeight)
    const div = createBranch(elementWidth, elementHeight);

    transform(div, 'translate3d(' + x + 'px, ' + y + 'px, 0px) ' +
        'rotateX(' + rx + 'deg) ' +
        'rotateY(' + ry + 'deg) ' +
        'rotateZ(' + rz + 'deg)');
    tree.appendChild(div);
}
