function setup() {
    createCanvas(600, 400);
    world.gravity.y = 20;

    balls = new Group();
    
    ground = createSprite(width/2, height -15, 600, 30);
    ground.immovable = true;
}

function draw() {
    background(220);
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.velocity.y += 0.5

        ball.collide(ground, bounce);
    }
}

function bounceball(ball, ground) {
    if (ball.velocity.y > 0) {
        ball.velocity.y *= -0.6;
    }
}

function mousePressed() {
    let ball = createSprite(mouseX, mouseY, 40, 40);

    ball.draw = function() {
        fill(random(255), random(255), random(255));
        ellipse(0, 0, 40, 40);
    };

    ball.velocity.y = 0;

    balls.add(ball);
}

