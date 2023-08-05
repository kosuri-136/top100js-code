let num = [1,849,4994,736,22,90];

let max=num.reduce(function (acc,ele,index,num){ // acc , ele are arguments acc=accumilator
    if(acc>ele)
    {
        return acc;
        // console.log(acc);
    }
    else
    {
        return ele;
        // console.log(ele);
    }

},num[0]); /// in reduce always first element is taken here by default for comparing1
console.log(max);