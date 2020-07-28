var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var foodLeft = 20;
function preload()
{
  puppy = loadImage("images/dogImg.png");
  happyPuppy = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.scale = 0.2;
  dog.addImage(puppy);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    foodLeft-=1;
    foodS-=1;
    dog.addImage(happyPuppy);
  }
  drawSprites();
  fill("white");
  text("Milk Bottles remaining : "+foodLeft,200,150);
  text("Note: Press UP ARROW key to feed the Drago milk",150,100);

}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  
  database.ref('/').update({
    Food:x
  })
}

