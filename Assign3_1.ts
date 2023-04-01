class Arithmetic
{
     Number1:number;
     Number2:number;

     constructor(num1:number,num2:number)
    {
        this.Number1=num1;
        this.Number1=num2;
        console.log("Number1: "+this.Number1)
        console.log("Number2: "+this.Number2)
    }

     Addition()
    {
        let Ans:number=0;
        Ans=this.Number1+this.Number2;
        return Ans;
    }
     Substraction()
    {
        let Ans:number=0;
        if(this.Number1>this.Number2)
        {
            Ans=this.Number1-this.Number2;
        }
        else
        {
            Ans=this.Number2-this.Number1;
        }
        
        return Ans;
    }
     Multiplication()
    {
        let Ans:number=0;
        Ans=this.Number1*this.Number2;
        return Ans;
    }
     Division()
    {
        if(this.Number2==0)
        {
            console.log("Cant divide by 0");
            return;
        }
        let Ans:number=0;
        Ans=this.Number1/this.Number2;
        return Ans;
    }
}

var AObj1=new Arithmetic(10,11);
var Ret:number=0;

Ret=AObj1.Addition();
console.log("Addition is: "+Ret);

Ret=AObj1.Substraction();
console.log("Substraction is: "+Ret);

Ret=AObj1.Multiplication();
console.log("Multiplication is: "+Ret);

Ret=AObj1.Division();
console.log("Division is: "+Ret);

var Obj2=new Arithmetic(90,0);

Ret=Obj2.Addition();
console.log("Addition is: "+Ret);

Ret=Obj2.Substraction();
console.log("Substraction is: "+Ret);

Ret=Obj2.Multiplication();
console.log("Multiplication is: "+Ret);

Ret=Obj2.Division();
console.log("Division is: "+Ret);

