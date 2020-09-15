class dustbinClass {
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true,
            'friction': 1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);


    }

    display() {
        //var pos = this.body.position;
        rectMode(CENTER);
        fill(250, 0, 0);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}