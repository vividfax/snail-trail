class Paint {

    constructor() {

        this.x = random(width);
        this.y = random(height);
        this.radius = 40;
        this.color = this.randomColor();
        this.shape = this.randomShape();
        this.rotate = this.randomRotate();
    }

    display() {

        push();
        translate(this.x, this.y);
        rotate(this.rotate);

        fill(this.color);
        noStroke();
        rectMode(CENTER);

        if (this.shape == 1) {
            ellipse(0, 0, this.radius * 0.9);
        } else if (this.shape == 10) {
            star(0, 0, this.radius/2, 5);
        } else {
            shape(0, 0, this.radius * .5, this.shape);
        }
        pop();
    }

    hover(x, y) {

        let distance = dist(x, y, this.x, this.y);

        if (distance < this.radius/2) {

            player.color = this.color;
            player.shape = this.shape;
            player.rotate = this.rotate;

            if (player.scale == 0) {
                //
            } else if (player.radius < 1) {
                player.radius = 0;
            } else {
                player.radius *= 0.9;
            }
            this.x = random(width);
            this.y = random(height);
            this.color = this.randomColor();
            this.shape = this.randomShape();
            this.rotate = this.randomRotate();

            let tink;

            do {
                tink = int(random(5));
            } while (tink == tinkCache || tink == tinkCache2);

            tinks[tink].play();

            tinkCache2 = tinkCache;
            tinkCache = tink;

            pops.play();
        }
    }

    randomColor() {

        return color(random(100), random(40), 100);
    }

    randomShape() {

        return random([1, 3, 4, 5, 6, 10]);
    }

    randomRotate() {

        return random(360);
    }
}
