//hoisting
{
  var x;
   console.log(x)
     x=65;{
     var x=25;
    console.log(x);
}
console.log(x);
}
