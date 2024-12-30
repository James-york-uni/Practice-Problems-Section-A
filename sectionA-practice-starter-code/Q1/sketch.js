moveAmount = 1;
y = 150;
let yCoord = [];

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(255);
    fill(255, 192, 203);
    circle(width/2, y, 50);
    if (y > height - 25 || y < 25) {
        moveAmount *=-1;
    }
    y -= moveAmount;
    yCoord.unshift(y);
    console.log(yCoord[0])
}

function mousePressed() {
    if (mouseX > width/2 - 25 && mouseX < width/2 + 25 && 
        mouseY > yCoord[0] - 25 && mouseY < yCoord[0] + 25) {
        moveAmount *=-1;
    }
}

function keyPressed() {
    if(key === " ") {
        y = height/2;
        moveAmount = 1;  
    }
}