y = 0;
moveAmount = 1;

function setup() {
    createCanvas(200, 400);
    fill(random(255), random(255), random(255));
}


function draw() {
    background(0);
    square(0, y, width);
    y += moveAmount;
   
    if(y < 0 || y > height - width) {
        moveAmount = 0;;
    }
}


function mouseClicked() {
    fill(random(255), random(255), random(255));
}


function keyPressed() {
    if(key === "u" || key === "U"){
        if(y <= 0) {
            moveAmount = 0;
        }else {
            moveAmount = -1;
        }
    }


    if(key === "d" || key === "D"){
        if(y >= height - width) {
            moveAmount = 0;
        }else {
        moveAmount = 1;
        }
    }
}





