function Maximum(num):number
{
    let iCnt:number=0;
    let iMax1:number=0;
    let iMax2:number=0
    num[iCnt]
    for(iCnt=0;iCnt<num.length;iCnt++)
    {
        if(num[iCnt]>iMax1)
        {
            iMax1=num[iCnt]
        }
    }
    for(iCnt=0;iCnt<num.length;iCnt++)
    {
        if(num[iCnt]>iMax2 &&num[iCnt]<iMax1)
        {
            iMax2=num[iCnt]
        }
    }

    return iMax2
}


var Input_Arr : number[]=[23,89,6,29,56,45,77,32];
var iRet:number=0;
iRet=Maximum(Input_Arr)
console.log("Second Maximum Number from array is : "+ iRet)