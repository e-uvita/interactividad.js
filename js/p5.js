let x = 0;
let y = 0;
let friction = 0.1;

function setup() { 
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() { 
    background(0, 10); 
    let time= millis() / 1000;
    let r = sin(time*2) * 127 + 128;
    let g = cos(time/2) * 127 + 128;
    let b = sin(time/3) * 127 + 128 ;
    stroke(r, g, b);
    noFill();
    x+= (mouseX - x) * friction;
    y+= (mouseY - y) * friction;

    let size = sin(time) * 25 + 25;
    strokeWeight(4);
    circle(x, y, size);
}