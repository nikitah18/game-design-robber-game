var bg,bgimage


function preload(){
bgimage=loadImage('gamefloor.webp')
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 bg=createSprite(width/2,height/2)
 bg.addImage('bg',bgimage)
 bg.scale=1.8
 Robber=createSprite(50,50,50,50)
 walls=new Group()
 wall1=createSprite(width/4,height/8,width/2,20)
 wall1.shapeColor='black'
 walls.add(wall1)

 wall2=createSprite(width/1.5,height/8,20,height/4)
 wall2.shapeColor='black'
 walls.add(wall2)

 wall3=createSprite(width/1.2,height/2.5,width/3,20)
 wall3.shapeColor='black'
 walls.add(wall3)

 wall4=createSprite(width/1.27,height/7,width/4,20)
 wall4.shapeColor='black'
 walls.add(wall4)

 wall5=createSprite(width/1.11,height/4.7,20,height/8)
 wall5.shapeColor='black'
 walls.add(wall5)

 wall6=createSprite(width/1.19,height/3.9,width/6,20)
 wall6.shapeColor='black'
 walls.add(wall6)

 wall7=createSprite(width/4,height/4,20,height/4)
 wall7.shapeColor='black'
 walls.add(wall7)

 wall8=createSprite(width/1.1,height/1.7,width/2,20)
 wall8.shapeColor='black'
 walls.add(wall8)

 wall9=createSprite(width/1.1,height/1.1,20,height/4)
 wall9.shapeColor='black'
walls.add(wall9)

 wall10=createSprite(width/1.4,height/1.1,20,height/4)
 wall10.shapeColor='black'
 walls.add(wall10)

 wall11=createSprite(width/1.23,height/1.1,20,height/4)
 wall11.shapeColor='black'
 walls.add(wall11)

 wall12=createSprite(width/6,height/2,20,height/2)
 wall12.shapeColor='black'
 walls.add(wall12)

 wall13=createSprite(width/11,height/1.2,20,height/2)
 wall13.shapeColor='black'
 walls.add(wall13)

 wall14=createSprite(width/4,height/1.2,20,height/2)
 wall14.shapeColor='black'
 walls.add(wall14)
 
 wall15=createSprite(width/2.4,height/1.1,width/3,20)
 wall15.shapeColor='black'
 walls.add(wall15)

 wall16=createSprite(width/1.7,height/1.2,20,height/5)
 wall16.shapeColor='black'
 walls.add(wall6)

 wall17=createSprite(width/2.5,height/2.4,20,height/1.8)
 wall17.shapeColor='black'
 walls.add(wall17)

 wall18=createSprite(width/2,height/2,width/5,20)
 wall18.shapeColor='black'
 walls.add(wall18)
 itemsGroup=new Group()
 items()
 edges=createEdgeSprites()
 score=0
 t=120
}

function draw() {
 background(0)
 if(keyDown('up')){
     Robber.y-=10
 }
 if(keyDown('down')){
     Robber.y+=10
 }
 if(keyDown('left')){
     Robber.x-=10
 }
 if(keyDown('right')){
     Robber.x+=10
 }
itemsGroup.collide(walls)
Robber.collide(walls)
Robber.collide(edges)
Robber.overlap(itemsGroup,collectItems)
setTimeout(()=>{console.log('timeOut')},30000)
 drawSprites()

 text('score-'+score,width-100,50)
 text('time left-'+t,width-100,50)
}

function items(){

    for(var i=1;i<=15;i++){
        var a=Math.round(random(50,width-50))
        var b=Math.round(random(50,height-50))
        var item=createSprite(a,b,50,50)
        itemsGroup.add(item)
        }
    
}
function collectItems(Robber,item){
item.destroy()
score+=10
}
function gameEnd(){
    swal(
        {
          title: `Game Over!!!`,
          text: "You Got Caught!!",
          
          
          confirmButtonText: "Play Again"
        },
        function(isConfirm) {
          if (isConfirm) {
            location.reload();
          }
        }
      );
    }
