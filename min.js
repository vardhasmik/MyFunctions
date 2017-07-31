min=(a,b)=>{
  if(a<b) return a
  return b
}

console.log(min(5,-10));

isEven=(a)=>{
  if(a%2===0) return true
  return false
}

console.log(isEven(-8))


countBs=(string, symbol)=>{
  let count=0
  for(let i=0;i<string.length;i++)
  {
    if(string[i]==symbol)
    {
      count+=1;
    }
  }
  return count
}

console.log(countBs("hello-hello", 'o'))
//example
