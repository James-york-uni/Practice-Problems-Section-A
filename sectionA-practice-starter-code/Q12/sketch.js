let number = 0;
let n = 0;
let colours = [];

function setup() {
    createCanvas(600, 600);
    frameRate(50); 
}

function draw() {
    background(255); 
    fill(colours[0], colours[1], colours[2]);
        if(number === 1){
        for(let x = 0; x <= width; x += width/6) {
            for(let y = 0; y <= height; y += height/6) {
                circle(x, y, width/6);
            }
        }
    } else {
        for(let x = 0; x <= width; x += width/6) {
            for(let y = 0; y <= height; y += height/6) {
                square(x, y, width/6);
            }
        }
    }

    n ++;
    console.log(n); 
    if(n % 50 === 0){
        colours.unshift(random(255), random(255), random(255));
    }
    
}

function mousePressed(){
    if(true) {
        number = 1;
    } 
}

function mouseReleased() {
    if(true);
    number = 0;
}