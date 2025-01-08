let colours = [];
let number = [0];

function setup() {
    createCanvas(600, 600);
    for(let c = 0; c < 3; c ++) {
        colours.unshift(random(255));
        console.log(colours.length); 
    }
}

function draw() {
    background(255); 
    fill(colours[0], colours[1], colours[2]);

    if(number[0] === 1){
        for(let x = 0; x <= width; x += width/7) {
            for(let y = 0; y <= height; y += height/7) {
                 square(x, y, width/7);
            }
        }
    } else {
        for(let x = 0; x <= width; x += width/7) {
            for(let y = 0; y <= height; y += height/7) {
                circle(x, y, width/7);
            }
        }
    }
}

function keyPressed() {
    if(key === "a") {
        colours.unshift(random(255), random(255), random(255));
    } 
    
    if(key === "s") {
       number.unshift(1);
       number.pop();
       console.log(number[0]);
    }
    
    if(key === "c"){
      number.unshift(0);
      number.pop();
      console.log(number); 
    }
}