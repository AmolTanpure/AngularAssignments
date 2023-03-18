function Maximum(num):number
{
    let iCnt:number=0;
    let iMax:number=0;
    num[iCnt]
    for(iCnt=0;iCnt<num.length;iCnt++)
    {
        if(num[iCnt]>iMax)
        {
            iMax=num[iCnt]
        }
    }
    return iMax
}


var Input_Arr : number[]=[23,89,6,29,56,45,77,32];
var iRet:number=0;
iRet=Maximum(Input_Arr)
console.log("Maximum Number from array is : "+ iRet)