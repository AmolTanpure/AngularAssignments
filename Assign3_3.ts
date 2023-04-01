
class Circle
{
    public Radius:number;
    public PI:number;

    constructor(Radius:number)
    {
        this.Radius=Radius;
        this.PI=3.14;
    }

    Area():number
    {
        let area:number=0;
        area=this.PI*this.Radius*this.Radius;
        return area;
    }
    
}
class CircleX extends Circle
{
    constructor(Value1:number)
    {
        super(Value1);
    }
    Circumference():number
    {
        let circum:number=0;
        circum=2*this.Radius*this.Radius;
        return circum;
    }
}

var xobj=new CircleX(10);
var xobj2=new CircleX(20);
var Ret:number=0;
Ret=xobj.Circumference();
console.log("Circumference is : "+Ret)
console.log("Circumference is : "+xobj2.Circumference());

