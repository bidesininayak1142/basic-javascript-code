 // Reverse
let a = [10, 20, 30, 40];
console.log("Original array:", a);

a.reverse();
console.log("Reversed array:", a);

// Rotate right
let j = 3;
for (let i = 0; i < j; i++) {
  let last = a.pop();    
  a.unshift(last);       
}

console.log("Array after right rotation:", a);

//clock wise
function rotate(arr, d) {
  let n = arr.length;
  for (let i = 0; i < d; i++) {
    let last = arr[n - 1];
    for (let j = n - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = last;
  }
}

let arr = [1, 2, 3, 4, 5, 6];
let d = 2;

rotate(arr, d);
console.log(arr);




// //anticlock wise
function rotateLeft(arr, d) {
  let n = arr.length;
  for (let i = 0; i < d; i++) {
    let first = arr[0];
    for (let j = 0; j < n - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[n - 1] = first;
  }
}

// let arr = [1, 2, 3, 4, 5, 6];
// let d = 2;

rotateLeft(arr, d);
console.log(arr);



