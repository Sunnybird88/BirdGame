var birdImage
var bird
var ground
var backgroundImg
var gameState = 0;
var startButton
var playButtonImg
var startGroup

function preload() {

    birdImage = loadImage("BirdFlyingImg.png");
    backgroundImg = loadImage("birdFlyingBackgrround.jpg");
    playButtonImg = loadImage("play.jpg");
}

function setup() {
createCanvas(1200, 600);

    startGroup = new Group();


    bird = createSprite(400, 500, 50, 50);

    ground = createSprite(600, 600, 1200, 50)

    
}

function draw() {
    background(backgroundImg);

        if (keyDown("space")) {

            bird.velocityY = -12
        }
        if (keyDown("up_arrow")) {

            bird.velocityY = -12
        }
        bird.velocityY = bird.velocityY + 0.8
    
    fill("black");
    textSize(30);
    text("! ᖴᒪYIᑎG ᗷIᖇᗪ GᗩᗰE !", 540, 50);
    textSize(25);
    text("ᵐᵃᵏᵉ ᵗʰᵉ ᵇⁱʳᵈ ʲᵘᵐᵖ ᶠʳᵒᵐ ᵒᵇˢᵗᵃᶜˡᵉ ᵗᵒ ᵒᵇˢᵗᵃᶜˡᵉ", 540, 90);
    text("ᵖʳᵉˢˢ ˢᵖᵃᶜᵉ ᵗᵒ ʲᵘᵐᵖ, ᵃⁿᵈ ᵗʰᵉ ᵃʳʳᵒʷ ᵏᵉʸˢ ᵗᵒ ᵐᵒᵛᵉ", 540, 120);
    text("ᴳᵉᵗ ᵗᵒ ᵗʰᵉ ᵗᵒᵖ ᵗᵒ ʷⁱⁿ, ˢᵒ ᵍᵒᵒᵈ ˡᵘᶜᵏ!!", 540, 150);

    startButton = createSprite(650, 220, 120, 50);
    startButton.addImage(playButtonImg)
    startButton.scale = 0.2


    if (mousePressedOver("start")) {
        bird.addImage(birdImage);
        bird.scale = 0.2;
    }


    bird.collide(ground);

    drawSprites();
}


