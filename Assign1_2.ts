function Area(rad:number):number
{
    let PI:number=3.14;
    let Ans:number=0;

    Ans=PI*rad*rad;
    return Ans;
}

var Radius:number=5;
var AreaOfCircle:number=0;
AreaOfCircle=Area(Radius);

console.log("Area of Circle is: "+AreaOfCircle)