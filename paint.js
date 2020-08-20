var flag = false,
    previousX = 0,
    currentX = 0,
    previousY = 0,
    currentY = 0,
    dot_flag = false,
    shade = "black",
    w = 1,
    canvas,
    c,
    red,
    yellow,
    blue,
    green,
    orange,
    black;

var colorInput = document.querySelector("#color");    


function init(){
	canvas = document.querySelector("canvas");
	c = canvas.getContext("2d");
	canvas.addEventListener("mousemove", function (at) {
	    findxy('move', at)
	   }, false);
	canvas.addEventListener("mousedown", function (at) {
	    findxy('down', at)
	   }, false);
	canvas.addEventListener("mouseup", function (at) {
	    findxy('up', at)
	   }, false);
	canvas.addEventListener("mouseout", function (at) {
	    findxy('out', at)
	   }, false);
}


colorInput.addEventListener('input', () =>{
    shade = color.value;
    w = 2;
});


function pickcolor(){
    consoloe.log("reached");
    consoloe.log(color.value);
    shade = color.value;
    consoloe.log(shade);
}


function colorchange(gs){
    shade = "white";
    w = 14;
}


function draw() {
    c.beginPath();
    c.moveTo(previousX, previousY);
    c.lineTo(currentX, currentY);
    c.strokeStyle = shade;
    c.lineWidth = w;
    c.stroke();
    c.closePath();
}


function findxy(response, at) {
    if (response === 'down') {
        previousX = currentX;
        previousY = currentY;
        currentX = at.clientX - canvas.offsetLeft;
        currentY = at.clientY - canvas.offsetTop;
   
        flag = true;
        dot_flag = true;
        if (dot_flag) {
        c.beginPath();
        c.fillStyle = shade;
        c.fillRect(currentX, currentY, 1, 1);
        c.closePath();
        dot_flag = false;
        }
    }
    if (response === 'up' || response === "out") {
        flag = false;
    }
    if (response === 'move') {
        if (flag) {
            previousX = currentX;
            previousY = currentY;
            currentX = at.clientX - canvas.offsetLeft;
            currentY = at.clientY - canvas.offsetTop;
            draw();
        }
    }
}


function erase(){
	c.clearRect(0, 0, 700, 700);
}