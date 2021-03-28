class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    attach(body){
        this.throw.bodyA = body;

    }

    fly(){
        this.throw.bodyA=null;
    }

    

    Launch(bodyA){
        this.throw.bodyA=bodyA;

    }

    display(){
       if(this.throw.bodyA){
           var pointA = this.bodyA.position;
           var pointB = pointB;
           strokeWeight(0);
           line(pointA.x,pointA.y,pointB.x,pointB.y);
           
       }
    }
    
}