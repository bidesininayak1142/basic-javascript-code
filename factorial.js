function fact(n){
    num =1;
    for(let i=1; i<=n; i++){
        num *=i;
   }
   return num;
}
console.log(fact(5))