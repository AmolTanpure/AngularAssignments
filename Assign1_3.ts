function DisplayFactors(var1:number):void
{

    console.log("Factors of the "+var1+" is: ")
    for(var iCnt=1;iCnt<=var1/2;iCnt++)
    {
        if(var1%iCnt==0)
        {
            console.log(iCnt)
        }
    }

}

var num:number=20;

DisplayFactors(num);