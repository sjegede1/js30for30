const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0 ;
let direction = true;

const draw = (e) => {
    if (!isDrawing) return;
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue++
    hue = hue < 100 ? hue : 0
    
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }



    ctx.beginPath()
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
}

canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown',(e) => {
    isDrawing=true;
    lastX = e.offsetX
    lastY = e.offsetY
})
canvas.addEventListener('mouseup',() => isDrawing=false)
canvas.addEventListener('mouseout',() => isDrawing=false)