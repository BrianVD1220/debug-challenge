/*
    debug exercise
*/

var faceSize = "100" * 3

function setup() {
    createCanvas(640, 480)
}


function draw() {
    background('#add8e6')


// face
    fill(255)
    ellipse(350, 320, faceSize)

// right eye
    fill(0)
    ellipse(450, 250, 100)

// left eye
    ellipse(250, 250, 100) 
// mouth
    ellipse(350, 300 + 100, 100, 50) 

//chat bubble
    fill(255)
    ellipse(150, 100, 200, 150)
    triangle(200, 200, 150, 175, 175, 150)

    fill(0)
    textSize(28)
    textFont("monospace")
    text("Nice work!",65, 110);
}