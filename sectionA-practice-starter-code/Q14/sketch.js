let positionX = [];
let positionY = [];
let size = [];

function setup() {
    createCanvas(400, 400); 
    for(let n = 0; n < 5; n++) {
        positionX.unshift(random(50, width - 51))
        positionY.unshift(random(50, height - 51));
        size.unshift(random(20, 51));
    }
}

function draw() {
    background(255);
    for(n = 0; n < 5; n++) {
        square(positionX[n], positionY[n], size[n])
        if(mouseX > positionX[n] && mouseX < positionX[n] + size[n] && mouseY > positionY[n] && mouseY < positionY[n] + size[n]) {
            positionX[n] = random(50, width - 51);
            positionY[n] = random(50, width - 51);
        }
    }
}