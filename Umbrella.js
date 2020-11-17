
class Umbrella{
    constructor(x,y){
    var options={
        isStatic:true,
        
    }
    this.body=Bodies.circle(x,y,10,options)
    this.image=loadImage("man.png")
    this.radius=50;
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    imageMode(CENTER);
    
    translate(pos.x,pos.y)
    rotate(angle)
    image(this.image,0,0,70,70)
    pop()
    }
    
    }
    