const greeting = [
    'printf("{0}");',
    'cout << "{0}" << endl;',
    'WriteLn("{0}");',
    'System.out.println( "{0}" );',
    'print "{0}"',
    'fmt.Println("{0}");',
    'echo "{0}"',
    'say "{0}"',
    'print("{0}");',
    '(print "{0}")',
    'PRINT "{0}"',
    '<%= "{0}" %>',
    'System.Console.WriteLine("{0}");',
    'console.log("{0}");',
    'document.write("{0}")',
];

const year = new Date().getFullYear() + 1;
const str = ["Merry Christmas!", "Happy New Year!", "Hello " + year + "!"];

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

    const s = greeting[getRandom(0, greeting.length - 1)].format(str[getRandom(0, str.length - 1)]);

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


const width = 500;
const height = 600;
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

    transform(div, 'translate3d(' + x + 'px, ' + y + 'px, 0px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');
    tree.appendChild(div);
}
