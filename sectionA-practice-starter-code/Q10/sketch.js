let colours = [0, 0, 0];

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(255);
    squares();
    fill(colours[0], colours[1], colours[2]);
    circle(mouseX, mouseY, 100); 
    
}

function squareCreation(x) {
    square(x, 0, width/5);
}

function squares() {
    fill(0);
    squareCreation(0);
    fill(255);
    squareCreation(width/5);
    fill(255, 0, 0);
    squareCreation(width*2/5);
    fill(0, 255, 0);
    squareCreation(width*3/5);
    fill(0, 0, 255); 
    squareCreation(width*4/5);
}

function colourD(x1, x2, r, g, b) {
    if(mouseX > x1 && mouseX < x2 && mouseY > 0 && mouseY < width/5){
        colours.unshift(r, g, b); 
    }
}

function mouseClicked() {
    colourD(0, width/5, 0, 0, 0);
    colourD(width/5, width*2/5, 255, 255, 255);
    colourD(width*2/5, width*3/5, 255, 0, 0);
    colourD(width*3/5, width*4/5, 0, 255, 0);
    colourD(width*4/5, width, 0, 0, 255);
}