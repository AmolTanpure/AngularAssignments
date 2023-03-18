function Summation(Arr):number
{
    let nSum:number=0;
    let nCnt:number=0;

    for(nCnt=0;nCnt<Arr.length;nCnt++)
    {
        nSum+=Arr[nCnt]
    }
    return nSum;
}

var Arr_List:number[]=[23,6,7,4,5,7]
var iRet:number=0;
iRet=Summation(Arr_List);
console.log("Summation of Arr elements is: "+iRet);