let colours = [];
let x = 0;

function setup() {
    createCanvas(600, 600);

}

function draw(){
    background(255);
    fill(colours[0], colours[1], colours[2]);
    square(0, 0, x)

    if(x > width) {
        x = 100; 
    }
   
}

function mouseClicked() {
    x += 100;
    colours.unshift(random(255), random(255), random(255));
}
