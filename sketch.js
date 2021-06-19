let player;

let paints = [];

let tinks = [];
let tinkCache;
let tinkCache2;

let fry;
let pops;

function preload() {

    for (let i = 0; i < 5; i++) {

        tinks[i] = new Audio("sounds/tink" + i + ".wav");
    }
    fry = new Audio("sounds/fry.ogg");
    fry.loop = true;

    pops = new Audio("sounds/pops.ogg");
    pops.loop = true;
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background("#fff");
    colorMode(HSB, 100);

    player = new Player();

    for (let i = 0; i < 5; i++) {
        paints[i] = new Paint();
    }
    select("#saveButton").mousePressed(() => saveCanvas("canvas", "png"));
    select("#restartButton").mousePressed(() => restart());
}

function draw() {

    player.display();

    for (let i = 0; i < paints.length; i++) {

        paints[i].hover(mouseX, mouseY);
        paints[i].display();
    }
    if (player.radius < 3) {
        select("#saveButton").show();
        select("#restartButton").show();
    }
}

function restart() {

    background("#fff");
    player.radius = width * 2;
    player.color = color(0, 0);

    select("#saveButton").hide();
    select("#restartButton").hide();
}

function shape(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function star(x, y, radius1, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  radius2 = radius1 / 2;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyPressed() {

    player.radius *= 1.1;
}
