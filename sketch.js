var dog,happyDog;
var database;
var foodS,foodStock;
var dogImg;
var dogImg1

function preload()
{
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,2,2);
  dog.addImage("dog1",dogImg1);

 database = firebase.database();

 foodStock = database.ref('food');
 foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);
drawSprites(); 
  
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage("dog2",dogImg2);

    

     Text("note : press up arrow key to feed dog milk",450,75);
     textSize(15);
     fill("red");

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
   
  food:x

 })


}



