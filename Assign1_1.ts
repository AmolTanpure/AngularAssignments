// Accept 3 numbers and return maximum number 
//23 89 6

function MaximumNum(var1:number,var2:number,var3:number):number
{
    if(var1>var2)
    {
        if(var1>var3)
        {
            return var1
        }
        else
        {
            return var3
        }
    }
    else
    {
        if(var2>var3)
        {
            return var2
        }
        else
        {
            return var3
        }
    }

}

var num1:number=23
var num2:number=89
var num3:number=6
var Ret:number=0

Ret=MaximumNum(num1,num2,num3)
console.log("Maximum number is:"+Ret)