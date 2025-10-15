let numbers = [6, 4, 8, -2];  
let i = 0;

while (i < numbers.length) {
    let num = numbers[i];  

    if (num > 0) {
        console.log(num + " is positive");
    } else if (num < 0) {
        console.log(num + " is negative");
    } else {
        console.log(num + " is zero");
    }

    i++; 
}
