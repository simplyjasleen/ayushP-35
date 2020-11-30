var dog,happyDog;
var database;
var foodS,foodStock;
var dogImg;
var dogImg1
/*
function preload()
{
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}
*/

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,2,2);
 // dog.addImage("dog1",dogImg1);

 

 foodStock = database.ref('food');
 foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);
drawSprites();

textSize(15);
fill("red");
text("note : press up arrow key to feed dog milk" + foodS,100,100);

  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
    // dog.addImage("dog2",dogImg2);
    

  }
  

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){

      if(x<=0){
        x=0;
      }else{
      x=x-1; 
    }
      
    database.ref('/').update
    ({
      'food':x
    })
}



