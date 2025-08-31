function setup() {
    createCanvas(600, 400);
    world.gravity.y = 20;
}

function draw() {
    background(220);
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.velocity.y += 0.5
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
