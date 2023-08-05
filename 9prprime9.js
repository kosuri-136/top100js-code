let n = 100;
for(i=1;i<=n;i++)
{
    for(j=2;j<n;j++)
    {
        if(i%j==0)
        {
            flag=1;
            break;
        }
    }
    if(i>1 && flag==0)
    {
        console.log(isPrime.push(i));
    }
}