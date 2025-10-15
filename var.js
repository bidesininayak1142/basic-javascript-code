function testvar(){
    let myvar = "jamuna";
    if(true){
        let myvar = "hello";
        console.log(myvar);
    }
    console.log(myvar);
}
testvar();