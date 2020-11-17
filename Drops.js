class Drops{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain=Bodies.circle(x,y,5,options)
        this.radius=5;
        World.add(world,this.rain)
    
        //create a rain body which will be a Circular Phy Engine body
        
        // add  the rain body to the world
    }

    updateDrops(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        //use an ellipse to display the rain 
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}