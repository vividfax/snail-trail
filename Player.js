class Player {

    constructor() {

        this.radius = (width + height) * 2;
        this.color = color(0, 0);
        this.shape = 0;
        this.rotate = 0;
    }

    display() {

        push();
        translate(mouseX, mouseY);
        rotate(this.rotate);

        fill(this.color);
        noStroke();

        if (this.shape == 1) {
            ellipse(0, 0, this.radius);
        } else {
            shape(0, 0, this.radius * .5, this.shape);
        }
        pop();
    }

    move() {

    }
}
