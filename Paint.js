class Paint {

    constructor() {

        this.x = random(width);
        this.y = random(height);
        this.radius = 40;
        this.color = this.randomColor();
    }

    display() {

        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.radius);
    }

    hover(x, y) {

        let distance = dist(x, y, this.x, this.y);

        if (distance < this.radius/2) {

            player.color = this.color;

            if (player.radius == 0) {
                //
            } else if (player.radius < 1) {
                player.radius = 0;
            } else {
                player.radius *= 0.9;
            }
            this.x = random(width);
            this.y = random(height);
            this.color = this.randomColor();

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
}
