let t = parseInt(readLine());
let n = parseInt(readLine());
let arr = parseInt(readLine().split(" "));
for(i=0 ; i<n-1;i++)
{
    for(j=0;j=(n-i-1);j++)
    {
        let temp = arr[i];
        arr[i]=arr[n-i-1]
        arr[n-i-1]=temp;
    }
    console.log(temp);
}