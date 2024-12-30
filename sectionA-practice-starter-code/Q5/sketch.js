let x = 100;
let y = 100;
moveAmountY = 0;
moveAmountX = 0;
let r = 255;
let g = 0;
let b = 0;

function setup() {
    createCanvas(300, 300);

}

function draw(){
    background(255);
    noStroke();
    fill(r, g, b);
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

    if(key === "a") {
        if(r = 255){
            r = 0;
            g = 255;
            b = 0;
           }else if(g = 255) {
            r = 0;
            g = 0;
            b = 255;
           } 
    }
}

function mouseClicked() {
}