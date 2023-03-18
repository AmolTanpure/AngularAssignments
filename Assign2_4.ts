
function ChkArmStrong(num):boolean
{
    let nSum:number=0
    let nValue:number=num;
    let nDigit:number=0;

    while(num>0)
    {
        nDigit=num%10;
        nSum=nSum+nDigit*nDigit*nDigit
        num=num/10
    }
    if(nValue==nSum)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var iValue:number=153;
var bRet:boolean;
if(bRet==true)
{
    console.log("Entered Number is ArmStrong Number...!");
}
else
{
    console.log("Entered Number is not ArmStrong Number...!");
}