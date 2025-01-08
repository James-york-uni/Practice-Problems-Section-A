let x = [200];
let y = [100];

function setup() {
    createCanvas(400, 400);

}

function draw(){
    background(255);
    fill(255, 0, 0);
    ellipse(width/2, height/2, x[0], y[0]);
}

function keyPressed() {
    if(key === " "){
        x.unshift(y[0]);
        y.unshift(x[1]);
    }
}