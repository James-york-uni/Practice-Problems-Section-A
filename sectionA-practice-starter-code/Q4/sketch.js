let colours = []; 

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255);
    for(let f = 500; f >= 0; f -= 50) {
        for(let z = 0; z < 10; z++) {
            fill(colours[z], colours[z + 10], colours[z + 20]);
        }
        circle(250, 250, f);
    }
}

function mousePressed() {
    for(let w = 0; w < 30; w++) {
        colours.unshift(random(255), random(255), random(255));
        console.log(colours.length); 

    }
}