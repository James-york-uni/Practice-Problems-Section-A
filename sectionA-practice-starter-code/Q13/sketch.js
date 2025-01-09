let colours = [255, 0, 0];

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);
    fill(colours[0], colours[1], colours[2]);
    triangle(width/2, 100, 100, 500, 500, 500); 
}

function keyPressed() {
    if(key === "r") {
        colours.unshift(255, 0, 0); 
    }

    if(key === "g") {
        colours.unshift(0, 255, 0); 
    }

    if(key === "b") {
        colours.unshift(0, 0, 255); 
    }

    if(key === "R") {
        colours.unshift(255, 0, 0); 
    }

    if(key === "G") {
        colours.unshift(0, 255, 0); 
    }

    if(key === "B") {
        colours.unshift(0, 0, 255); 
    }
}