let colours = [];

function setup() {
    createCanvas(800, 400); 
    for(c = 0; c < 15; c++) {      
        colours.unshift(random(255));
        console.log(colours.length)
    }
}

function draw() {
    background(255);
    rectMode(CENTER);
    concSquares(width/4);
    concSquares(width*3/4);
    
}

function concSquares(x) {
    for(f = 0; f <= 300; f += 100) {
        square(x, height/2, height - f); 
    }
    
}