var canvasWidth = 600;
var canvasHeight = 300;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(220);
    fill('RED')
    circle(canvasWidth / 2, canvasHeight / 2, 100);
}
