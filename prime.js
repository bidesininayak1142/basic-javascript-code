var a=165
if(a<=1){
    console.log("not a prime");
}else{
    let isprime = true;
    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            isprime = false;
        }
    }
    if(isprime){

            console.log("prime  number");
        }else{
            console.log("not a prime");
        }
    }