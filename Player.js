class Player {

    constructor(x, y) {

        this.x = x;
        this.y = y;
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
