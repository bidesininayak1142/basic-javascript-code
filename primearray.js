let a =[19, 17 ,16,14,2222,21]
function isprime(num) {
    if (num<2) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0) return false;

}
return true;
}
for(let i=0;i<=a.length;i++){
    console.log(isprime(a[i]));
}