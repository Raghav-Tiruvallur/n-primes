const nprimes=(n)=>{
    let ans=[]
    let count=0;
    let number=2;
    while(count<=n)
    {
        let flag=0;
       for(let j=2;j<=number/2;j++)
       {
        if(number % j==0)
        {
            flag=1;
            break;
        }
       }
       if(!flag)
       {
        ans.push(number);
        count++;
       }
       number++;
    }
    return ans;
}

module.exports=nprimes;