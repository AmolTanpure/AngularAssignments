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

var Cobj1=new Circle(10);
var Cobj2=new Circle(20);
var Ret:number=0;
Ret=Cobj1.Area();
console.log("Area of circle is: "+Ret);
Ret=Cobj2.Area();
console.log("Area of circle is: "+Ret);