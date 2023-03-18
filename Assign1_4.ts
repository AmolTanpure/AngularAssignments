function ChkPrime(var1:number):boolean
{
    let iCnt:number=1;
    let Count=0;

    for(iCnt=1;iCnt<=var1/2;iCnt++)
    {
        if(var1%iCnt==0)
        {
            Count++;
        }
    }

    if(Count==1)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var iVar:number=19;
var bRet:boolean=false;

bRet=ChkPrime(iVar);
if(bRet==true)
{
    console.log("Number is Prime Number");
}
else
{
    console.log("Number is not Prime number");
}