 //join
//  let a=["jamuna","Bidesini","gayatri"]
// console.log(a)
// a.reverse()
// console.log(a.join(""))


// let a=["jamuna","Bidesini","gayatri"]
//  let arr=["NIT"]
// console.log("Initial arr:",arr);
// for(i=0; i<=a.length;i+=2){
// arr.reverse()
// console.log(`Step ${i}:`, arr);
// }


//using function
function reverseArray(str) {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr;
}

let a = ["jamuna", "Bidesini", "gayatri"];
let result = reverseArray(a);
console.log(result); 