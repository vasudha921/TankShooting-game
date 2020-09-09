


var Ground = createSprite(600,20,40,10);
var Tanker = createSprite(230,40,10,20);
Tanker.setAnimation("tanker.jpeg");

var CanonBall = createSprite(40,20,40,40);
CannonBall.setAnimation("canonBall.png");
CannonBall.visible = false;


function draw() {
background("white");
if (mousePressedOver("space")){
    CannonBall.visible = true;
}
drawSprites(); 
}


