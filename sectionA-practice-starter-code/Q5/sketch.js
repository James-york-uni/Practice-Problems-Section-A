let x = 100;
let y = 100;
moveAmountY = 0;
moveAmountX = 0;
let colours = [255, 0, 0];

function setup() {
    createCanvas(300, 300);

}

function draw(){
    background(255);
    noStroke();
    fill(colours[0], colours[1], colours[2]);
    circle(x, y, width * 2/3);
    y += moveAmountY;
    x += moveAmountX;

    if(x >= width - 100) {
        x = width - 100;
    }

    if(x <= 100) {
        x = 100
    }

    if(y >= height - 100) {
        y = height - 100;
    }

    if(y <= 100) {
        y = 100;
    }
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        moveAmountY = -1;
        moveAmountX = 0;
    }

    if(keyCode === DOWN_ARROW){
        moveAmountY = 1;
        moveAmountX = 0;
    }

    if(keyCode === LEFT_ARROW) {
        moveAmountX = -1;
        moveAmountY = 0;
    }

    if(keyCode === RIGHT_ARROW) {
        moveAmountX = 1;
        moveAmountY = 0;
    }
}

function mouseClicked() {
    colours.unshift(colours[2]);
}