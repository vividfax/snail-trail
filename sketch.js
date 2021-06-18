let player;

let paints = [];

let tinks = [];
let tinkCache;
let tinkCache2;

let fry;
let pop;

function preload() {

    for (let i = 0; i < 5; i++) {

        tinks[i] = new Audio("sounds/tink" + i + ".wav");
    }
    fry = new Audio("sounds/fry.ogg");
    fry.loop = true;

    pop = new Audio("sounds/pop.ogg");
    pop.loop = true;
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background("#fff");
    colorMode(HSB, 100);

    player = new Player(width/2, height/2);

    for (let i = 0; i < 5; i++) {
        paints[i] = new Paint();
    }
}

function draw() {

    player.display();

    for (let i = 0; i < paints.length; i++) {

        paints[i].hover(mouseX, mouseY);
        paints[i].display();
    }
}
