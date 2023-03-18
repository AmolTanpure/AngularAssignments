function Fibbonacci(var1:number):void
{
    let num1:number=1;
    let num2:number=0;
    let num3:number=0;

    console.log("Fibbonacci Series is: ")
    for(var iCnt=1;num3<var1;iCnt++)
    {
       num3=num1+num2;
       console.log(num3);
       num1=num2;
       num2=num3;
    }

}

var num:number=21;

Fibbonacci(num);