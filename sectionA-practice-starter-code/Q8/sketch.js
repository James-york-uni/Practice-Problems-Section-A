let colours = [];

function setup() {
    createCanvas(800, 400); 
    for(c = 0; c < 1000; c++) {      
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
            fill(colours[f],colours[f+1],colours[f+2]);
            square(x, height/2, height - f); 
    }
    
}

function keyPressed() {
    if(key === "r") {
        for(c = 0; c < 1000; c++) {      
            colours.unshift(random(255));
            console.log(colours.length)
        }
        for(f = 0; f <= 300; f += 100) {   
            fill(colours[f],colours[f+1],colours[f+2]);
            square(x, height/2, height - f); 
    }
    }
}