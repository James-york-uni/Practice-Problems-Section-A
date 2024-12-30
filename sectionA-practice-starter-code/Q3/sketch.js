let y;
let x;
moveAmountX = 1;
moveAmountY = 1;



function setup() {
    createCanvas(400, 400);
    x = random(width - 50);
    y = random(height - 50);
}

function draw() {
    background(0);
    square(x, y, 50)

    if(x > width - 50 || x < 0) {
        moveAmountX *= -1;
    }
    if(y > height - 50 || y < 0) {
        moveAmountY *= -1;
    }

    x += moveAmountX;
    y += moveAmountY; 
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        if(moveAmountX >= 0){
            moveAmountX ++;
        }
        if(moveAmountX < 0){
            moveAmountX --;
        }
        if(moveAmountY >= 0){
            moveAmountY ++;
        }
        if(moveAmountY < 0){
            moveAmountY --;
        }
    }

    if(keyCode === DOWN_ARROW) {
        if(moveAmountX >= 0) {
            moveAmountX --;
        }
        if(moveAmountX < 0) {
            moveAmountX ++;
        }
        if(moveAmountY >= 0) {
            moveAmountY --;
        }
        if(moveAmountY < 0) {
            moveAmountY ++;
        }
    }

    console.log(moveAmountX);
    console.log(moveAmountY);
}