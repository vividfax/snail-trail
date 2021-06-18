class Player {

    constructor() {

        this.radius = width * 2;
        this.color = color(0, 0);
    }

    display() {

        fill(this.color);
        noStroke();
        ellipse(mouseX, mouseY, this.radius);
    }

    move() {

    }
}
