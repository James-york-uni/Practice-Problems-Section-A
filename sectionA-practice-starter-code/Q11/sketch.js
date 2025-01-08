let x = [];
let y = [];
let colours = [];

function setup() {
    createCanvas(500, 400); 
    for(let n = 0; n < 150; n++) {
        x.unshift(random(0 + 20, width - 20));
        y.unshift(random(0 + 20, height - 20));
        colours.unshift(random(255), random(255), random(255));
    }
}

function draw() {
    background(175);
    for(let n = 0; n < 150; n++) {
        fill(colours[n], colours[2*n], colours[3*n]);
        ellipse(x[n], y[n+1], 20, 20);
    }
}