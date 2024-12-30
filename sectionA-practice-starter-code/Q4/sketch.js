let colours = []; 

function setup() {
    createCanvas(500, 500);
    for(let w = 0; w < 30; w++) {
        colours.unshift(random(255));
        console.log(colours.length); 
    }
}

function draw() {
    background(255);
    for(let f = 500; f >= 0; f -= 50) {
        circle(250, 250, f);
    }
}