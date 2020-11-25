class Paper{
constructor (x,y){
var options={
isStatic : false,
restitution : 0.3,
friction :0.5,
density :1.2
}
this.body=Bodies.circle(x,y,20,options);
this.x=x;
this.y=y;
this.r=20;
World.add(world,this.body);
}
display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
//rectMode(CENTER);
strokeWeight(3);
fill(255,0,255);
ellipseMode(RADIUS);
ellipse(0,0,this.r*2,this.r*2);
pop();

}







}